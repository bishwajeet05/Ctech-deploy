"use client";

import React from 'react';
import { StatusBadge } from './OrderTable';
import { Calendar, ArrowRight } from 'lucide-react';

type Order = {
  order: string;
  poNumber: string;
  orderConfirmation: string;
  orderConfirmationDate: string;
  requiredDeliveryDate: string;
  status: string;
};

interface GridViewProps {
  orders: Order[];
  onViewOrder: (orderId: string, orderNo: string) => void;
}

const GridView = ({ orders, onViewOrder }: GridViewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-1">
      {orders.map((order) => (
        <div
          key={order.order}
          className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all duration-200"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-base font-semibold">Order #{order.order}</h3>
              <p className="text-sm text-gray-500 mt-0.5">PO: {order.poNumber}</p>
            </div>
            <StatusBadge status={order.status} />
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Required: {order.requiredDeliveryDate}</span>
            </div>
            <p className="text-sm text-gray-600">
              Confirmation: {order.orderConfirmation}
            </p>
            <p className="text-sm text-gray-600">
              Conf. Date: {order.orderConfirmationDate}
            </p>
          </div>
          
          <button
            onClick={() => onViewOrder(order.order, order.orderConfirmation)}
            className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 hover:bg-primary/10 rounded-lg transition-colors"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      ))}
      
      {orders.length === 0 && (
        <div className="col-span-full text-center py-12 text-gray-500">
          No orders found
        </div>
      )}
    </div>
  );
};

export default GridView; 