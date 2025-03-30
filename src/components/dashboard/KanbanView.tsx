"use client";

import React from 'react';
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

const KanbanView = ({ orders, onViewOrder, orderDetails, selectedOrderId }: KanbanViewProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recent Orders Card */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-y border-gray-200 text-sm bg-gray-100">
                <th className="text-left font-medium text-gray-900 py-3 px-6">Order</th>
                <th className="text-left font-medium text-gray-900 py-3 px-6">PO</th>
                <th className="text-left font-medium text-gray-900 py-3 px-6">Conf. Date</th>
                <th className="text-left font-medium text-gray-900 py-3 px-6">Delivery Date</th>
                <th className="text-left font-medium text-gray-900 py-3 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders.map((order) => (
                <tr
                  key={order.order}
                  onClick={() => onViewOrder(order.order, order.orderConfirmation)}
                  className={cn(
                    "border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors",
                    selectedOrderId === order.order && "bg-primary/5"
                  )}
                >
                  <td className="py-3 px-6">
                    <span className="font-medium text-gray-900">#{order.orderConfirmation}</span>
                  </td>
                  <td className="py-3 px-6 text-gray-600">{order.poNumber}</td>
                  <td className="py-3 px-6 text-gray-600">{order.orderConfirmationDate}</td>
                  <td className="py-3 px-6 text-gray-600">{order.requiredDeliveryDate}</td>
                  <td className="py-3 px-6">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Card */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {selectedOrderId ? `#${orders.find(o => o.order === selectedOrderId)?.orderConfirmation} Details` : 'Order Details'}
          </h2>
        </div>

        {selectedOrderId && orderDetails[selectedOrderId] ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-y border-gray-200 text-sm bg-gray-100">
                  <th className="text-left font-medium text-gray-900 py-3 px-6">Model</th>
                  <th className="text-left font-medium text-gray-900 py-3 px-6">Ordered</th>
                  <th className="text-left font-medium text-gray-900 py-3 px-6">Delivered</th>
                  <th className="text-left font-medium text-gray-900 py-3 px-6">Pending</th>
                  <th className="text-left font-medium text-gray-900 py-3 px-6">Due In</th>
                  <th className="text-left font-medium text-gray-900 py-3 px-6">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {orderDetails[selectedOrderId].map((detail, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-6 text-gray-900">{detail.modelNo}</td>
                    <td className="py-3 px-6 text-gray-600">{detail.qtyOrdered}</td>
                    <td className="py-3 px-6 text-gray-600">{detail.qtyDelivered}</td>
                    <td className="py-3 px-6 text-gray-600">{detail.qtyPending}</td>
                    <td className="py-3 px-6 text-gray-600">{detail.daysRemainingToOverdue ? `${detail.daysRemainingToOverdue} days` : '- days'}</td>
                    <td className="py-3 px-6">
                      <StatusBadge status={detail.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            Select an order to view details
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanView; 