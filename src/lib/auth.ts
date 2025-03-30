import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { prisma } from "./prisma"

declare module "next-auth" {
  interface User {
    id: string
    email: string
    name: string | null
    image: string | null
    role: string
  }

  interface Session {
    user: {
      id: string
      email: string
      name: string | null
      image: string | null
      role: string
    }
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
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
        try {
          if (!credentials?.email || !credentials?.password) {
            console.log("Missing credentials");
            throw new Error("Invalid credentials");
          }

          // For quick login in development
          if (credentials.email === "user@cadratec.com" && credentials.password === "user123") {
            return {
              id: "cm7w3i3ir0001tkxw4scckndx",
              email: "user@cadratec.com",
              name: "Demo User",
              role: "USER",
              image: null
            };
          }

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
          });

          console.log("User found:", user ? "Yes" : "No");

          if (!user?.hashedPassword) {
            console.log("No password found for user");
            throw new Error("Invalid credentials");
          }

          const isValid = await bcrypt.compare(credentials.password, user.hashedPassword);
          console.log("Password valid:", isValid);

          if (!isValid) {
            throw new Error("Invalid credentials");
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            role: user.role
          };
        } catch (error) {
          console.error("Auth error:", error);
          throw error;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string | null
        session.user.image = token.image as string | null
        session.user.role = token.role as string
      }
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
  }
} 