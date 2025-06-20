import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    },
    log: ['query', 'info', 'warn', 'error']
  })
}

export const prisma = globalThis.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma
}

// Test the connection
prisma.$connect()
  .then(() => {
    console.log('Successfully connected to database')
    console.log('Connection URL:', process.env.DATABASE_URL.replace(/postgresql:\/\/[^:]+:[^@]+@/, 'postgresql://****:****@'))
  })
  .catch((e) => {
    console.error('Failed to connect to database:', e)
    process.exit(1)
  })

export default prisma 