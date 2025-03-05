"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const recentOrders = [
  {
    id: "ORD001",
    customer: "John Doe",
    status: "processing",
    total: "$250.00",
    date: "2024-02-20",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    status: "delivered",
    total: "$350.00",
    date: "2024-02-19",
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    status: "pending",
    total: "$120.00",
    date: "2024-02-19",
  },
  {
    id: "ORD004",
    customer: "Alice Brown",
    status: "delivered",
    total: "$450.00",
    date: "2024-02-18",
  },
  {
    id: "ORD005",
    customer: "Charlie Wilson",
    status: "processing",
    total: "$180.00",
    date: "2024-02-18",
  },
]

export function RecentOrders() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Total</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === "delivered"
                    ? "default"
                    : order.status === "processing"
                    ? "secondary"
                    : "outline"
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCell className="text-right">{order.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
} 