import * as z from "zod"

export const orderItemSchema = z.object({
  modelNo: z.string().min(1, "Model number is required"),
  qtyOrdered: z.number().min(1, "Quantity must be at least 1"),
  qtyDelivered: z.number().default(0),
  qtyPending: z.number(),
  status: z.enum(["pending", "partial", "delivered"]).default("pending"),
})

export const orderSchema = z.object({
  number: z.string().min(1, "Order number is required"),
  poNumber: z.string().optional(),
  orderConfirmation: z.string().optional(),
  orderConfirmationDate: z.date().optional(),
  requiredDeliveryDate: z.date().optional(),
  status: z.enum(["pending", "processing", "completed", "cancelled", "partial"]).default("pending"),
  total: z.number().min(0, "Total must be greater than or equal to 0"),
  orderItems: z.array(orderItemSchema),
})

export const createOrderSchema = orderSchema.extend({
  userId: z.string(),
})

export const updateOrderSchema = orderSchema.partial()

export type OrderItem = z.infer<typeof orderItemSchema>
export type Order = z.infer<typeof orderSchema>
export type CreateOrder = z.infer<typeof createOrderSchema>
export type UpdateOrder = z.infer<typeof updateOrderSchema> 