import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { authOptions } from '@/lib/auth'
import { updateOrderSchema } from '@/lib/validations/order'

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
    const validatedData = updateOrderSchema.parse(body)

    const order = await prisma.order.findUnique({
      where: { id: params.id },
      select: { userId: true }
    })

    if (!order) {
      return new NextResponse('Order not found', { status: 404 })
    }

    // Allow admins to update any order
    if (session.user.role !== 'ADMIN' && order.userId !== session.user.id) {
      return new NextResponse('Forbidden - You do not have permission to update this order', { status: 403 })
    }

    const updatedOrder = await prisma.order.update({
      where: { id: params.id },
      data: {
        ...validatedData,
        orderItems: {
          updateMany: validatedData.orderItems?.map(item => ({
            where: { modelNo: item.modelNo },
            data: {
              status: item.status,
              qtyOrdered: item.qtyOrdered,
              qtyDelivered: item.qtyDelivered,
              qtyPending: item.qtyPending
            }
          }))
        }
      }
    })

    return NextResponse.json(updatedOrder)
  } catch (error) {
    console.error('Error updating order:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 