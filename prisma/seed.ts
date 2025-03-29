import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  try {
    // Clean existing data
    await prisma.orderItem.deleteMany()
    await prisma.order.deleteMany()
    await prisma.document.deleteMany()
    await prisma.session.deleteMany()
    await prisma.user.deleteMany()

    // Create admin user
    const adminPassword = await hash('admin123', 12)
    const admin = await prisma.user.create({
      data: {
        email: 'admin@cadratec.com',
        name: 'Admin User',
        password: adminPassword,
        type: 'ADMIN',
      },
    })

    // Create demo user
    const userPassword = await hash('user123', 12)
    const user = await prisma.user.create({
      data: {
        email: 'user@cadratec.com',
        name: 'Demo User',
        password: userPassword,
        type: 'USER',
      },
    })

    // Create sample documents
    await prisma.document.create({
      data: {
        title: 'Product Catalog 2024',
        description: 'Latest product catalog with specifications',
        url: '/documents/catalog-2024.pdf',
        type: 'pdf',
        size: 2048576, // 2MB
        userId: user.id,
      },
    })

    await prisma.document.create({
      data: {
        title: 'Technical Specifications',
        description: 'Detailed technical specifications for all products',
        url: '/documents/tech-specs.pdf',
        type: 'pdf',
        size: 1048576, // 1MB
        userId: user.id,
      },
    })

    // Create sample orders with items
    const order1 = await prisma.order.create({
      data: {
        number: 'ORD-2024-001',
        poNumber: 'PO-001',
        orderConfirmation: 'AU-00274',
        orderConfirmationDate: new Date('2024-07-25'),
        requiredDeliveryDate: new Date('2024-07-30'),
        status: 'completed',
        total: 1500.00,
        userId: user.id,
        items: {
          create: [
            {
              modelNo: 'Silver Soleil',
              qtyOrdered: 50,
              qtyDelivered: 50,
              qtyPending: 0,
              status: 'delivered'
            },
            {
              modelNo: 'Black Soleil',
              qtyOrdered: 60,
              qtyDelivered: 60,
              qtyPending: 0,
              status: 'delivered'
            }
          ]
        }
      },
    })

    const order2 = await prisma.order.create({
      data: {
        number: 'ORD-2024-002',
        poNumber: 'PO-002',
        orderConfirmation: 'AU-00275',
        orderConfirmationDate: new Date('2024-07-25'),
        requiredDeliveryDate: new Date('2024-08-01'),
        status: 'partial',
        total: 2750.50,
        userId: user.id,
        items: {
          create: [
            {
              modelNo: 'Platinum Elite Series',
              qtyOrdered: 75,
              qtyDelivered: 75,
              qtyPending: 0,
              status: 'delivered'
            },
            {
              modelNo: 'Rose Gold Collection',
              qtyOrdered: 45,
              qtyDelivered: 0,
              qtyPending: 45,
              status: 'pending'
            }
          ]
        }
      },
    })

    console.log('Seed data created successfully')
  } catch (error) {
    console.error('Error seeding data:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 