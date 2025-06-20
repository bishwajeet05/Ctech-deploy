import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  },
  log: ['query', 'info', 'warn', 'error']
})

// Test the connection
prisma.$connect()
  .then(() => {
    console.log('Successfully connected to database')
    console.log('Connection URL:', process.env.DATABASE_URL.replace(/postgresql:\/\/postgres:(.*)@/, 'postgresql://postgres:****@'))
  })
  .catch((e) => {
    console.error('Failed to connect to database:', e)
    throw e
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma 