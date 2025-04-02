import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  try {
    // Clean existing data
    await prisma.orderItem.deleteMany()
    await prisma.order.deleteMany()
    await prisma.document.deleteMany()
    await prisma.session.deleteMany()
    await prisma.user.deleteMany()

    // Create users with known passwords
    const adminPassword = await bcrypt.hash('admin123', 12)
    const userPassword = await bcrypt.hash('user123', 12)
    const testPassword = await bcrypt.hash('test123', 12)

    // Create admin user
    const adminUser = await prisma.user.create({
      data: {
        id: 'cm7w3i3as0000tkxwj5t6boqc',
        name: 'Admin User',
        email: 'admin@cadratec.com',
        hashedPassword: adminPassword,
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    // Create demo user
    const demoUser = await prisma.user.create({
      data: {
        id: 'cm7w3i3ir0001tkxw4scckndx',
        name: 'Demo User',
        email: 'user@cadratec.com',
        hashedPassword: userPassword,
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    // Create test user
    const testUser = await prisma.user.create({
      data: {
        id: 'test-user-1',
        name: 'Test User',
        email: 'test@cadratec.com',
        hashedPassword: testPassword,
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    // Create documents
    await prisma.document.createMany({
      data: [
        {
          id: 'cm7w3i3iu0003tkxwt5iv5m2o',
          title: 'Product Catalog 2024',
          description: 'Latest product catalog with specifications',
          url: '/documents/catalog-2024.pdf',
          type: 'pdf',
          size: 2048576,
          userId: demoUser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'cm7w3i3ix0005tkxwztw1wls4',
          title: 'Technical Specifications',
          description: 'Detailed technical specifications for all products',
          url: '/documents/tech-specs.pdf',
          type: 'pdf',
          size: 1048576,
          userId: demoUser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    })

    // Create orders
    const order1 = await prisma.order.create({
      data: {
        id: 'cm7w3i3j00007tkxwbp1fn5aj',
        number: 'ORD-2024-001',
        status: 'completed',
        total: 1500,
        userId: demoUser.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        orderConfirmation: 'AU-00274',
        orderConfirmationDate: new Date('2024-07-25'),
        poNumber: 'PO-001',
        requiredDeliveryDate: new Date('2024-07-30'),
      },
    })

    const order2 = await prisma.order.create({
      data: {
        id: 'cm7w3i3j3000btkxw561a7j9w',
        number: 'ORD-2024-002',
        status: 'partial',
        total: 2750.5,
        userId: demoUser.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        orderConfirmation: 'AU-00275',
        orderConfirmationDate: new Date('2024-07-25'),
        poNumber: 'PO-002',
        requiredDeliveryDate: new Date('2024-08-01'),
      },
    })

    // Create order items
    await prisma.orderItem.createMany({
      data: [
        {
          id: 'cm7w3i3j00008tkxwnh4acgzb',
          orderId: order1.id,
          modelNo: 'Silver Soleil',
          qtyOrdered: 50,
          qtyDelivered: 50,
          qtyPending: 0,
          status: 'delivered',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'cm7w3i3j00009tkxwsy8qrnq1',
          orderId: order1.id,
          modelNo: 'Black Soleil',
          qtyOrdered: 60,
          qtyDelivered: 60,
          qtyPending: 0,
          status: 'delivered',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'cm7w3i3j3000ctkxwgsr30myl',
          orderId: order2.id,
          modelNo: 'Platinum Elite Series',
          qtyOrdered: 75,
          qtyDelivered: 75,
          qtyPending: 0,
          status: 'delivered',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'cm7w3i3j3000dtkxw09z1imgw',
          orderId: order2.id,
          modelNo: 'Rose Gold Collection',
          qtyOrdered: 45,
          qtyDelivered: 0,
          qtyPending: 45,
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    })

    console.log('Seed data has been inserted successfully')
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