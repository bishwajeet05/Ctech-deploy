import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/auth-options"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import Dashboard from "@/components/dashboard/Dashboard"
import { UserType } from "@prisma/client"

export default async function ClientDashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/login")
  }

  if (session.user.role !== UserType.USER) {
    redirect("/auth/admin/login")
  }

  return <Dashboard />
} 