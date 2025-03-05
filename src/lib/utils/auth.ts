import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "./prisma"
import bcrypt from "bcryptjs"

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('Please provide NEXTAUTH_SECRET environment variable')
}

if (!process.env.NEXTAUTH_URL) {
  throw new Error('Please provide NEXTAUTH_URL environment variable')
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        type: { label: "Type", type: "text" } // 'admin' or 'client'
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password || !credentials?.type) {
          return null
        }

        let user = null

        if (credentials.type === 'admin') {
          user = await prisma.admin.findUnique({
            where: {
              email: credentials.email
            }
          })
        } else if (credentials.type === 'client') {
          user = await prisma.client.findUnique({
            where: {
              email: credentials.email
            }
          })
        }

        if (!user || !user.password || !user.isActive) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          role: credentials.type === 'admin' ? user.role || 'admin' : 'client',
          type: credentials.type
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.type = user.type
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role as string
        session.user.type = token.type as string
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`
      } else if (new URL(url).origin === baseUrl) {
        return url
      }
      return baseUrl + "/admin/dashboard"
    }
  }
} 