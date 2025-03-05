import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth-options"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getUserRole() {
  const session = await getServerSession(authOptions)
  return session?.user?.role
} 