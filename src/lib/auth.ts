import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { prisma } from "./prisma"
import { UserType } from "@prisma/client"

declare module "next-auth" {
  interface User {
    id: string
    email: string
    name: string | null
    image: string | null
    role: UserType
  }

  interface Session {
    user: {
      id: string
      email: string
      name: string | null
      image: string | null
      role: UserType
    }
  }
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
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("Missing credentials")
          throw new Error("Please enter your email and password")
        }

        try {
          console.log("Attempting database connection...")
          await prisma.$connect()
          console.log("Database connected successfully")

          console.log("Looking up user:", credentials.email)
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            },
            select: {
              id: true,
              email: true,
              name: true,
              hashedPassword: true,
              role: true,
              image: true
            }
          })

          if (!user || !user.hashedPassword) {
            console.error("No user found:", credentials.email)
            throw new Error("No user found with this email")
          }

          console.log("Verifying password...")
          const isValid = await bcrypt.compare(credentials.password, user.hashedPassword)

          if (!isValid) {
            console.error("Invalid password for user:", credentials.email)
            throw new Error("Invalid password")
          }

          console.log("Authentication successful for user:", credentials.email)
          const authorizedUser = {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            role: user.role as UserType
          };
          console.log("Authorized user object:", authorizedUser);
          return authorizedUser;
        } catch (error) {
          console.error("Authentication error:", error)
          throw error
        } finally {
          await prisma.$disconnect()
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("JWT callback triggered. User:", user, "Token:", token);
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.image = user.image
        token.role = user.role as UserType
      }
      console.log("Returning JWT token:", token);
      return token
    },
    async session({ session, token }) {
      console.log("Session callback triggered. Session:", session, "Token:", token);
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string | null
        session.user.image = token.image as string | null
        session.user.role = token.role as UserType
      }
      console.log("Returning session:", session);
      return session
    }
  },
  cookies: {
    sessionToken: {
      name: `${process.env.NODE_ENV === 'production' ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production'
      }
    }
  },
  debug: true, // Enable debug logs in both development and production
} 