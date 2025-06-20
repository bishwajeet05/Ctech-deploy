import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

import { db } from "@/lib/db"

type UserType = 'ADMIN' | 'USER'

interface CustomUser extends User {
  role: UserType;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials")
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            image: true,
            hashedPassword: true,
          },
        })

        if (!user || !user.hashedPassword) {
          throw new Error("Invalid credentials")
        }

        const isValid = await compare(credentials.password, user.hashedPassword)

        if (!isValid) {
          throw new Error("Invalid credentials")
        }

        return user as CustomUser
      },
    }),
  ],
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: false // Always false since we're using HTTP
      }
    }
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id as string
        session.user.name = token.name as string | null
        session.user.email = token.email as string
        session.user.role = token.role as UserType
        session.user.image = token.image as string | null
      }

      return session
    },
    async jwt({ token, user }): Promise<JWT> {
      if (user) {
        token.id = user.id
        token.role = (user as CustomUser).role
        return token
      }

      const dbUser = await db.user.findFirst({
        where: {
          email: token.email ?? undefined,
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          image: true,
        },
      })

      if (!dbUser) {
        return token
      }

      return {
        ...token,
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        role: dbUser.role as UserType,
        image: dbUser.image,
      }
    },
  },
} 