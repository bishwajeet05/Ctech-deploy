import { PrismaClient as MySQLPrisma } from '@prisma/client'
import { PrismaClient as PostgresPrisma } from '@prisma/client'
import * as fs from 'fs'

// Read the SQL file
const sqlFile = fs.readFileSync('./cardatec.sql', 'utf8')

// Parse the SQL data (you'll need to implement this based on your SQL structure)
const parseSQL = (sql: string) => {
  // Implementation to parse your SQL file
  // Return structured data
}

async function migrateData() {
  const mysqlData = parseSQL(sqlFile)
  const postgres = new PostgresPrisma()

  try {
    // Migrate admins
    await postgres.admin.createMany({
      data: [
        {
          name: 'Super Admin',
          email: 'admin@admin.com',
          password: '$2y$10$iSZfMjur4/6jXTc1dN9Hx.tN1nnIieniXBRCrfum1WnQE0rfLe6oW',
          role: 'super_admin',
          isActive: true,
          emailVerifiedAt: new Date('2025-01-20 07:17:58'),
          createdAt: new Date('2025-01-20 07:17:58'),
          updatedAt: new Date('2025-01-20 07:17:58'),
        },
        {
          name: 'Editor',
          email: 'editor@admin.com',
          password: '$2y$10$NBhHeG2Mhe1jyT.84vf/4uLPKFtmfRdbtYe0EmY5p56piJQTLLngu',
          role: 'editor',
          isActive: true,
          emailVerifiedAt: new Date('2025-01-20 07:17:58'),
          createdAt: new Date('2025-01-20 07:17:58'),
          updatedAt: new Date('2025-01-20 07:17:58'),
        }
      ]
    })

    // Migrate clients
    await postgres.client.createMany({
      data: [
        {
          name: 'Rajesh Kumar',
          email: 'rajesh@technovision.com',
          password: '$2y$10$5adSEbUSBpuqgZE.LYLjbOAh.AxmfGbUrr90Zk8GtoLBMlAZZZmkW',
          phone: '9876543210',
          companyName: 'Technovision Industries Pvt Ltd',
          gstNumber: '27AABCT3518Q1Z2',
          contactPersonName: 'Amit Sharma',
          contactPersonEmail: 'amit.s@technovision.com',
          contactPersonPhone: '9876543211',
          address: '42, Industrial Area Phase II, Chandigarh, 160002',
          isActive: true,
          emailVerifiedAt: new Date('2025-01-20 07:17:58'),
          createdAt: new Date('2025-01-20 07:17:58'),
          updatedAt: new Date('2025-01-20 07:17:58'),
        },
        // ... add other clients
      ]
    })

    // Migrate orders
    await postgres.order.createMany({
      data: [
        {
          clientId: 1,
          orderConfirmationNumber: 'ORD-2024-001',
          modelNo: 'WT-2024-A',
          quantityOrdered: 100,
          quantityDelivered: 0,
          quantityPending: 0,
          requiredDeliveryDate: new Date('2025-01-05 07:17:58'),
          status: 'delivered',
          createdAt: new Date('2024-12-21 07:17:58'),
          updatedAt: new Date('2025-01-20 07:17:58'),
        },
        // ... add other orders
      ]
    })

    console.log('Migration completed successfully')
  } catch (error) {
    console.error('Migration failed:', error)
  } finally {
    await postgres.$disconnect()
  }
}

migrateData() 