import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

// Use connection pooling in production
const databaseUrl = process.env.DATABASE_URL.replace(':5432', ':6543')

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl
    }
  },
  log: ['query', 'info', 'warn', 'error']
})

// Test the connection
prisma.$connect()
  .then(() => {
    console.log('Successfully connected to database using pooled connection')
    console.log('Connection URL:', databaseUrl.replace(/postgresql:\/\/postgres:(.*)@/, 'postgresql://postgres:****@'))
  })
  .catch((e) => {
    console.error('Failed to connect to database:', e)
    throw e
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma 