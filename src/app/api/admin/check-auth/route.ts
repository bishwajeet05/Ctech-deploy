import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { users } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    const user = await db.select({ role: users.role }).from(users).where(eq(users.email, email)).then(r => r[0])

    const isAdmin = user?.role === 'ADMIN'

    if (!isAdmin) {
      return NextResponse.json({ isAdmin: false }, { status: 403 })
    }

    return NextResponse.json({ isAdmin: true })
  } catch (error) {
    console.error('Admin check error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 