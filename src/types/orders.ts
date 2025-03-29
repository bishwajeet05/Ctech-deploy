import type { Order } from "@prisma/client"

export interface OrderItem {
  id: string
  orderId: string
  modelNo: string
  qtyOrdered: number
  qtyDelivered: number
  qtyPending: number
  status: string
  createdAt: Date
  updatedAt: Date
}

export interface OrderWithItems {
  id: string
  number: string
  poNumber: string | null
  orderConfirmation: string | null
  orderConfirmationDate: Date | null
  requiredDeliveryDate: Date | null
  status: string
  total: number
  userId: string
  createdAt: Date
  updatedAt: Date
  orderItems: OrderItem[]
} 