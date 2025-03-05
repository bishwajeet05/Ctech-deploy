import { z } from 'zod'

export const orderSchema = z.object({
  id: z.string(),
  userId: z.string(),
  status: z.enum(['PENDING', 'PROCESSING', 'COMPLETED', 'CANCELLED']),
  details: z.object({
    items: z.array(z.object({
      name: z.string(),
      quantity: z.number(),
      price: z.number()
    }))
  }),
  total: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export const createOrderSchema = orderSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
})

export const updateOrderSchema = orderSchema.partial().omit({
  id: true,
  userId: true,
  createdAt: true,
  updatedAt: true
}) 