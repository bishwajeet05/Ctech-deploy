import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create a mock Prisma client for build time
const mockPrismaClient = {
  $connect: () => Promise.resolve(),
  $disconnect: () => Promise.resolve(),
  user: {
    findMany: () => Promise.resolve([]),
    findUnique: () => Promise.resolve(null),
    findFirst: () => Promise.resolve(null),
    create: () => Promise.resolve(null),
    update: () => Promise.resolve(null),
    delete: () => Promise.resolve(null),
  },
  // Add other models as needed
} as unknown as PrismaClient

const prismaClientSingleton = () => {
  // During build, return the mock client
  if (process.env.SKIP_DB_DURING_BUILD === 'true') {
    console.log('Using mock Prisma client during build')
    return mockPrismaClient
  }

  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set')
  }

  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    },
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error']
  })
}

export const prisma =
  globalForPrisma.prisma ??
  prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
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