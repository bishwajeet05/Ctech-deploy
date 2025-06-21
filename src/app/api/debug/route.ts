import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { users as usersTable } from '@/lib/db/schema'

export async function GET() {
  try {
    const users = await db.select({
      id: usersTable.id,
      email: usersTable.email,
      role: usersTable.role,
      createdAt: usersTable.createdAt,
    }).from(usersTable)

    return NextResponse.json({ users })
  } catch (error) {
    console.error('Debug route error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 