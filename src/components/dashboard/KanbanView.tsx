"use client";

import React, { useState } from 'react';
import { StatusBadge } from './OrderTable';
import { cn } from '@/lib/utils';
import { OrderDetail } from './OrderDetailsModal';

type Order = {
  order: string;
  poNumber: string;
  orderConfirmation: string;
  orderConfirmationDate: string;
  requiredDeliveryDate: string;
  status: string;
};

interface KanbanViewProps {
  orders: Order[];
  onViewOrder: (orderId: string, orderNo: string) => void;
  orderDetails: Record<string, OrderDetail[]>;
  selectedOrderId: string | null;
}

const ORDERS_PER_PAGE = 6;

const KanbanView = ({ orders, onViewOrder, orderDetails, selectedOrderId }: KanbanViewProps) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(orders.length / ORDERS_PER_PAGE);
  const paginatedOrders = orders.slice((page - 1) * ORDERS_PER_PAGE, page * ORDERS_PER_PAGE);

  return (
    <div className="flex flex-row gap-6 h-full min-h-0">
      {/* Recent Orders Card */}
      <div className="w-full max-w-sm md:basis-1/3 flex flex-col bg-white rounded-xl border border-gray-200 min-w-0 h-full min-h-0">
        <div className="p-6 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
        </div>
        <div className="flex-1 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-y border-gray-200 text-sm bg-gray-100">
                <th className="text-left font-medium text-gray-900 py-3 px-6">Order No</th>
                <th className="text-left font-medium text-gray-900 py-3 px-6">PO No</th>
                <th className="text-left font-medium text-gray-900 py-3 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders.map((order) => (
                <tr
                  key={order.order}
                  onClick={() => onViewOrder(order.order, order.orderConfirmation)}
                  className={cn(
                    "border-b border-gray-100 cursor-pointer transition-colors",
                    selectedOrderId === order.order
                      ? "bg-blue-100 !text-blue-900"
                      : "hover:bg-blue-50 hover:!text-blue-900"
                  )}
                >
                  <td className="py-3 px-6 font-medium text-gray-900">#{order.orderConfirmation}</td>
                  <td className="py-3 px-6 text-gray-600">{order.poNumber}</td>
                  <td className="py-3 px-6"><StatusBadge status={order.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Card */}
      <div className="flex-1 flex flex-col bg-white rounded-xl border border-gray-200 min-w-0 h-full min-h-0">
        <div className="p-6 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {selectedOrderId ? `#${orders.find(o => o.order === selectedOrderId)?.orderConfirmation} Details` : 'Order Details'}
          </h2>
        </div>
        <div className="flex-1 overflow-x-auto">
          {selectedOrderId && orderDetails[selectedOrderId] ? (
            <table className="w-full min-w-[900px] text-sm">
              <thead>
                <tr className="border-y border-gray-200 bg-gray-100">
                  <th className="text-left font-medium text-gray-900 py-3 px-4">Model No.</th>
                  <th className="text-left font-medium text-gray-900 py-3 px-4">Qty. Ordered</th>
                  <th className="text-left font-medium text-gray-900 py-3 px-4">Qty. Delivered</th>
                  <th className="text-left font-medium text-gray-900 py-3 px-4">Qty Pending</th>
                  <th className="text-left font-medium text-gray-900 py-3 px-4">Confirmed Delivery Date</th>
                  <th className="text-left font-medium text-gray-900 py-3 px-4">Actual Delivery Date</th>
                  <th className="text-left font-medium text-gray-900 py-3 px-4">Remarks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {orderDetails[selectedOrderId].map((detail, index) => (
                  <tr key={index} className={cn(
                    "border-b border-gray-100 transition-colors",
                    "hover:bg-blue-50 hover:!text-blue-900"
                  )}>
                    <td className="py-3 px-4 text-gray-900">{detail.modelNo}</td>
                    <td className="py-3 px-4 text-gray-600">{detail.qtyOrdered}</td>
                    <td className="py-3 px-4 text-gray-600">{detail.qtyDelivered}</td>
                    <td className="py-3 px-4 text-gray-600">{detail.qtyPending}</td>
                    <td className="py-3 px-4 text-gray-600">{detail.confirmedDeliveryDate || '-'}</td>
                    <td className="py-3 px-4 text-gray-600">{detail.actualDeliveryDate || '-'}</td>
                    <td className="py-3 px-4 text-gray-600">{detail.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) :
            <div className="text-center py-12 text-gray-500">
              Select an order to view details
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default KanbanView; 