import { DefaultSession } from 'next-auth'
import { User as PrismaUser, UserType } from '@prisma/client'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      role: UserType
      email: string
      name: string | null
      image: string | null
    }
  }

  interface User extends Omit<PrismaUser, 'hashedPassword' | 'emailVerified' | 'createdAt' | 'updatedAt'> {
    id: string
    role: UserType
    email: string
    name: string | null
    image: string | null
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: UserType
    email: string
    name: string | null
    image: string | null
  }
} 