import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import Dashboard from "@/components/dashboard/Dashboard";

export default async function ClientDashboardPage() {
  // Removed session and role checks for unrestricted access
  return <Dashboard />;
}