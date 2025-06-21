import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { db } from '@/lib/db'
import { orders } from '@/lib/db/schema'
import { authOptions } from '@/lib/auth'
import { and, asc, desc, eq, ilike, or, count } from 'drizzle-orm'

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const searchTerm = searchParams.get('search') || ''
    const statusFilter = searchParams.get('status')
    const sortBy = searchParams.get('sortBy') || 'createdAt'
    const sortOrder = searchParams.get('sortOrder') === 'asc' ? asc : desc

    const sortableColumns = {
      createdAt: orders.createdAt,
      total: orders.total,
      status: orders.status,
    }

    const sortByColumn =
      sortableColumns[sortBy as keyof typeof sortableColumns] ||
      orders.createdAt

    const whereClauses = [
      eq(orders.userId, session.user.id),
      statusFilter
        ? eq(orders.status, statusFilter as "pending" | "processing" | "completed" | "cancelled" | "partial")
        : undefined,
      searchTerm
        ? or(
            ilike(orders.id, `%${searchTerm}%`),
            ilike(orders.poNumber, `%${searchTerm}%`)
          )
        : undefined,
    ].filter(Boolean)

    const [results, totalResult] = await Promise.all([
      db
        .select()
        .from(orders)
        .where(and(...whereClauses))
        .orderBy(sortOrder(sortByColumn))
        .limit(limit)
        .offset((page - 1) * limit),
      db.select({ value: count() }).from(orders).where(and(...whereClauses)),
    ])

    const total = totalResult[0].value

    return NextResponse.json({
      orders: results,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit,
      }
    })
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    
    // We will need to replace this with Drizzle-compatible validation later
    // For now, we'll assume the body is correct.
    const newOrderData = {
      ...body,
      userId: session.user.id,
      id: `ord_${Math.random().toString(36).substr(2, 9)}`, // Example ID
    }

    const newOrder = await db.insert(orders).values(newOrderData).returning()

    return NextResponse.json(newOrder[0])
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 