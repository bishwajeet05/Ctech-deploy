require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

interface User {
  id: string
  name: string
  email: string
  emailVerified: Date | null
  image: string | null
  hashedPassword: string
  role: string
  createdAt: Date
  updatedAt: Date
}

interface Document {
  id: string
  title: string
  description: string | null
  url: string
  type: string
  size: number
  userId: string
  createdAt: Date
  updatedAt: Date
}

interface Order {
  id: string
  number: string
  poNumber: string | null
  orderConfirmation: string | null
  orderConfirmationDate: Date | null
  requiredDeliveryDate: Date | null
  status: string
  total: number
  userId: string
  createdAt: Date
  updatedAt: Date
}

interface OrderItem {
  id: string
  orderId: string
  modelNo: string
  qtyOrdered: number
  qtyDelivered: number
  qtyPending: number
  status: string
  createdAt: Date
  updatedAt: Date
}

interface Session {
  id: string
  sessionToken: string
  userId: string
  expires: Date
}

interface ParsedData {
  users: User[]
  documents: Document[]
  orders: Order[]
  orderItems: OrderItem[]
  sessions: Session[]
}

// Read and parse SQL file
function parseSQLFile(filePath: string): ParsedData {
  const sqlContent = fs.readFileSync(filePath, 'utf8')
  const statements = sqlContent.split(';').filter((stmt: string) => stmt.trim())
  
  const data: ParsedData = {
    users: [],
    documents: [],
    orders: [],
    orderItems: [],
    sessions: []
  }

  statements.forEach((stmt: string) => {
    if (stmt.includes('INSERT INTO `users`')) {
      const matches = stmt.match(/\(([^)]+)\)/)
      if (matches) {
        const values = matches[1].split(',').map((v: string) => v.trim().replace(/['"]/g, ''))
        data.users.push({
          id: values[0],
          name: values[1],
          email: values[2],
          emailVerified: values[3] === 'NULL' ? null : new Date(values[3]),
          image: values[4] === 'NULL' ? null : values[4],
          hashedPassword: values[5],
          role: values[6],
          createdAt: new Date(values[7]),
          updatedAt: new Date(values[8])
        })
      }
    }
    else if (stmt.includes('INSERT INTO `documents`')) {
      const matches = stmt.match(/\(([^)]+)\)/)
      if (matches) {
        const values = matches[1].split(',').map((v: string) => v.trim().replace(/['"]/g, ''))
        data.documents.push({
          id: values[0],
          title: values[1],
          description: values[2] === 'NULL' ? null : values[2],
          url: values[3],
          type: values[4],
          size: parseInt(values[5]),
          userId: values[6],
          createdAt: new Date(values[7]),
          updatedAt: new Date(values[8])
        })
      }
    }
    else if (stmt.includes('INSERT INTO `orders`')) {
      const matches = stmt.match(/\(([^)]+)\)/)
      if (matches) {
        const values = matches[1].split(',').map((v: string) => v.trim().replace(/['"]/g, ''))
        data.orders.push({
          id: values[0],
          number: values[1],
          status: values[2],
          total: parseFloat(values[3]),
          userId: values[4],
          createdAt: new Date(values[5]),
          updatedAt: new Date(values[6]),
          orderConfirmation: values[7] === 'NULL' ? null : values[7],
          orderConfirmationDate: values[8] === 'NULL' ? null : new Date(values[8]),
          poNumber: values[9] === 'NULL' ? null : values[9],
          requiredDeliveryDate: values[10] === 'NULL' ? null : new Date(values[10])
        })
      }
    }
    else if (stmt.includes('INSERT INTO `order_items`')) {
      const matches = stmt.match(/\(([^)]+)\)/)
      if (matches) {
        const values = matches[1].split(',').map((v: string) => v.trim().replace(/['"]/g, ''))
        data.orderItems.push({
          id: values[0],
          orderId: values[1],
          modelNo: values[2],
          qtyOrdered: parseInt(values[3]),
          qtyDelivered: parseInt(values[4]),
          qtyPending: parseInt(values[5]),
          status: values[6],
          createdAt: new Date(values[7]),
          updatedAt: new Date(values[8])
        })
      }
    }
    else if (stmt.includes('INSERT INTO `sessions`')) {
      const matches = stmt.match(/\(([^)]+)\)/)
      if (matches) {
        const values = matches[1].split(',').map((v: string) => v.trim().replace(/['"]/g, ''))
        data.sessions.push({
          id: values[0],
          sessionToken: values[1],
          userId: values[2],
          expires: new Date(values[3])
        })
      }
    }
  })

  return data
}

const targetPrisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL // PostgreSQL connection
    }
  }
})

async function migrateData() {
  try {
    console.log('Starting migration...')
    console.log('Target DB URL:', process.env.DATABASE_URL)

    // Read SQL file
    const sqlFilePath = path.join(__dirname, '..', 'cadratec.sql')
    console.log('Reading SQL file from:', sqlFilePath)
    
    const data = parseSQLFile(sqlFilePath)
    console.log('Parsed data:', {
      users: data.users.length,
      documents: data.documents.length,
      orders: data.orders.length,
      orderItems: data.orderItems.length,
      sessions: data.sessions.length
    })

    // Migrate users
    console.log(`Migrating ${data.users.length} users...`)
    for (const user of data.users) {
      await targetPrisma.user.create({
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
          image: user.image,
          hashedPassword: user.hashedPassword,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        }
      })
    }

    // Migrate documents
    console.log(`Migrating ${data.documents.length} documents...`)
    for (const doc of data.documents) {
      await targetPrisma.document.create({
        data: {
          id: doc.id,
          title: doc.title,
          description: doc.description,
          url: doc.url,
          type: doc.type,
          size: doc.size,
          userId: doc.userId,
          createdAt: doc.createdAt,
          updatedAt: doc.updatedAt
        }
      })
    }

    // Migrate orders
    console.log(`Migrating ${data.orders.length} orders...`)
    for (const order of data.orders) {
      await targetPrisma.order.create({
        data: {
          id: order.id,
          number: order.number,
          poNumber: order.poNumber,
          orderConfirmation: order.orderConfirmation,
          orderConfirmationDate: order.orderConfirmationDate,
          requiredDeliveryDate: order.requiredDeliveryDate,
          status: order.status,
          total: order.total,
          userId: order.userId,
          createdAt: order.createdAt,
          updatedAt: order.updatedAt
        }
      })
    }

    // Migrate order items
    console.log(`Migrating ${data.orderItems.length} order items...`)
    for (const item of data.orderItems) {
      await targetPrisma.orderItem.create({
        data: {
          id: item.id,
          orderId: item.orderId,
          modelNo: item.modelNo,
          qtyOrdered: item.qtyOrdered,
          qtyDelivered: item.qtyDelivered,
          qtyPending: item.qtyPending,
          status: item.status,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt
        }
      })
    }

    // Migrate sessions
    console.log(`Migrating ${data.sessions.length} sessions...`)
    for (const session of data.sessions) {
      await targetPrisma.session.create({
        data: {
          id: session.id,
          sessionToken: session.sessionToken,
          userId: session.userId,
          expires: session.expires
        }
      })
    }

    console.log('Migration completed successfully!')
  } catch (error) {
    console.error('Migration failed:', error)
    throw error
  } finally {
    await targetPrisma.$disconnect()
  }
}

migrateData() 