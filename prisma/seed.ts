import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  try {
    // Clean existing data
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

    // Create sample orders
    await prisma.order.create({
      data: {
        number: 'ORD-2024-001',
        status: 'pending',
        total: 1500.00,
        userId: user.id,
      },
    })

    await prisma.order.create({
      data: {
        number: 'ORD-2024-002',
        status: 'processing',
        total: 2750.50,
        userId: user.id,
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