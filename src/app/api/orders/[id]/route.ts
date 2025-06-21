import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { db } from '@/lib/db'
import { orders } from '@/lib/db/schema'
import { authOptions } from '@/lib/auth'
import { eq } from 'drizzle-orm'

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const body = await req.json()
    // Skipping validation for now

    const order = await db.select({ userId: orders.userId }).from(orders).where(eq(orders.id, params.id)).then(r => r[0])

    if (!order) {
      return new NextResponse('Order not found', { status: 404 })
    }

    // Allow admins to update any order
    if (session.user.role !== 'ADMIN' && order.userId !== session.user.id) {
      return new NextResponse('Forbidden - You do not have permission to update this order', { status: 403 })
    }

    // Only update main order fields (not nested orderItems)
    const updatedOrder = await db.update(orders)
      .set({ ...body })
      .where(eq(orders.id, params.id))
      .returning()

    return NextResponse.json(updatedOrder[0])
  } catch (error) {
    console.error('Error updating order:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 