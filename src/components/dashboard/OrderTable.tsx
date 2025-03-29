"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Clock, ArrowRight, RefreshCw } from 'lucide-react';

type Order = {
  order: string;
  poNumber: string;
  orderConfirmation: string;
  orderConfirmationDate: string;
  requiredDeliveryDate: string;
  status: string;
};

type OrderTableProps = {
  orders: Order[];
  onViewOrder: (orderId: string, orderNo: string) => void;
};

export const ViewButton = ({ onClick }: { onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-md text-primary hover:text-primary/80 hover:bg-primary/10 transition-colors"
  >
    View
    <ArrowRight className="w-3 h-3 ml-1" />
  </button>
);

export const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-[#E8F5E9] text-[#22C55E] border-[#A5D6A7] font-semibold';
      case 'Pending':
        return 'bg-[#FFF3E0] text-[#D97706] border-[#FFCC80] font-semibold';
      case 'Partial':
        return 'bg-[#E3F2FD] text-[#2563EB] border-[#90CAF9] font-semibold';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300 font-semibold';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="w-3 h-3" />;
      case 'Pending':
        return <Clock className="w-3 h-3" />;
      case 'Partial':
        return <RefreshCw className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div className={cn(
      "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border",
      getStatusStyles(status)
    )}>
      <span className="mr-1">{getStatusIcon(status)}</span>
      {status}
    </div>
  );
};

const OrderTable = ({ orders, onViewOrder }: OrderTableProps) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-border">
          <thead>
            <tr className="bg-muted/30">
              <th className="w-10 px-4 py-3 text-left">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary/20" />
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[#404040] uppercase tracking-wider">
                Order No.
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[#404040] uppercase tracking-wider">
                PO Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[#404040] uppercase tracking-wider">
                Order Confirmation Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[#404040] uppercase tracking-wider">
                Required Delivery Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[#404040] uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[#404040] uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-border">
            {orders.map((order) => (
              <tr key={order.order} className="hover:bg-muted/20 transition-colors">
                <td className="px-4 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary/20" />
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="text-base font-semibold text-[#404040]">#{order.orderConfirmation}</span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-base text-[#4A4A4A]">
                  {order.poNumber}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-base text-[#4A4A4A]">
                  {order.orderConfirmationDate}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-base text-[#4A4A4A]">
                  {order.requiredDeliveryDate}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <ViewButton onClick={() => onViewOrder(order.order, order.orderConfirmation)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable; 