"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatCard from './StatCard';
import OrderTable from './OrderTable';
import GridView from './GridView';
import KanbanView from './KanbanView';
import Tabs from './Tabs';
import ActionButton from './ActionButton';
import SearchBar from './SearchBar';
import { 
  Package, 
  RefreshCw, 
  Truck, 
  LineChart,
  LayoutGrid,
  Columns,
  Layout,
  ArrowRight,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import OrderDetailsModal, { OrderDetail } from './OrderDetailsModal';

type Order = {
  order: string;
  poNumber: string;
  orderConfirmation: string;
  orderConfirmationDate: string;
  requiredDeliveryDate: string;
  status: string;
};

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'pending', label: 'Pending' },
  { id: 'partial', label: 'Partial' },
  { id: 'delivered', label: 'Delivered' }
];

const orders = [
  {
    order: "2",
    poNumber: "PO-001",
    orderConfirmation: "AU-00274",
    orderConfirmationDate: "25-Jul-24",
    requiredDeliveryDate: "30-Jul-24",
    status: "Delivered"
  },
  {
    order: "3",
    poNumber: "PO-002",
    orderConfirmation: "AU-00275",
    orderConfirmationDate: "25-Jul-24",
    requiredDeliveryDate: "01-Aug-24",
    status: "Partial"
  },
  {
    order: "4",
    poNumber: "PO-003",
    orderConfirmation: "AU-00276",
    orderConfirmationDate: "25-Jul-24",
    requiredDeliveryDate: "02-Aug-24",
    status: "Pending"
  },
  {
    order: "5",
    poNumber: "PO-004",
    orderConfirmation: "AU-00277",
    orderConfirmationDate: "25-Jul-24",
    requiredDeliveryDate: "05-Aug-24",
    status: "Delivered"
  },
  {
    order: "6",
    poNumber: "PO-005",
    orderConfirmation: "AU-00278",
    orderConfirmationDate: "25-Jul-24",
    requiredDeliveryDate: "07-Aug-24",
    status: "Pending"
  },
  {
    order: "7",
    poNumber: "PO-006",
    orderConfirmation: "AU-00279",
    orderConfirmationDate: "25-Jul-24",
    requiredDeliveryDate: "15-Mar-25",
    status: "Partial"
  },
  {
    order: "8",
    poNumber: "PO-007",
    orderConfirmation: "AU-00280",
    orderConfirmationDate: "26-Jul-24",
    requiredDeliveryDate: "20-Aug-24",
    status: "Pending"
  },
  {
    order: "9",
    poNumber: "PO-008",
    orderConfirmation: "AU-00281",
    orderConfirmationDate: "26-Jul-24",
    requiredDeliveryDate: "25-Aug-24",
    status: "Pending"
  }
];

const sampleOrderDetails: Record<string, OrderDetail[]> = {
  "2": [
    {
      modelNo: "Silver Soleil",
      qtyOrdered: 50,
      qtyDelivered: 50,
      qtyPending: 0,
      daysRemainingToOverdue: null,
      status: "Delivered"
    },
    {
      modelNo: "Black Soleil",
      qtyOrdered: 60,
      qtyDelivered: 60,
      qtyPending: 0,
      daysRemainingToOverdue: null,
      status: "Delivered"
    },
    {
      modelNo: "Blue Soleil",
      qtyOrdered: 60,
      qtyDelivered: 60,
      qtyPending: 0,
      daysRemainingToOverdue: null,
      status: "Delivered"
    },
    {
      modelNo: "Grenti 188C Soleil",
      qtyOrdered: 50,
      qtyDelivered: 50,
      qtyPending: 0,
      daysRemainingToOverdue: null,
      status: "Delivered"
    },
    {
      modelNo: "Black / Gold Laser Pattern",
      qtyOrdered: 3,
      qtyDelivered: 3,
      qtyPending: 0,
      daysRemainingToOverdue: null,
      status: "Delivered"
    }
  ],
  "3": [
    {
      modelNo: "Platinum Elite Series",
      qtyOrdered: 75,
      qtyDelivered: 75,
      qtyPending: 0,
      daysRemainingToOverdue: null,
      status: "Delivered"
    },
    {
      modelNo: "Rose Gold Collection",
      qtyOrdered: 45,
      qtyDelivered: 0,
      qtyPending: 45,
      daysRemainingToOverdue: 15,
      status: "Pending"
    },
    {
      modelNo: "Diamond Cut Crystal",
      qtyOrdered: 30,
      qtyDelivered: 30,
      qtyPending: 0,
      daysRemainingToOverdue: null,
      status: "Delivered"
    }
  ],
  "4": [
    {
      modelNo: "Sapphire Glass Pro",
      qtyOrdered: 100,
      qtyDelivered: 0,
      qtyPending: 100,
      daysRemainingToOverdue: 8,
      status: "Pending"
    },
    {
      modelNo: "Emerald Cut Premium",
      qtyOrdered: 80,
      qtyDelivered: 0,
      qtyPending: 80,
      daysRemainingToOverdue: 8,
      status: "Pending"
    }
  ],
  "5": [
    {
      modelNo: "Ruby Red Limited",
      qtyOrdered: 25,
      qtyDelivered: 25,
      qtyPending: 0,
      daysRemainingToOverdue: null,
      status: "Delivered"
    },
    {
      modelNo: "Pearl White Special",
      qtyOrdered: 40,
      qtyDelivered: 40,
      qtyPending: 0,
      daysRemainingToOverdue: null,
      status: "Delivered"
    },
    {
      modelNo: "Onyx Black Edition",
      qtyOrdered: 35,
      qtyDelivered: 35,
      qtyPending: 0,
      daysRemainingToOverdue: null,
      status: "Delivered"
    }
  ],
  "6": [
    {
      modelNo: "Titanium Max",
      qtyOrdered: 90,
      qtyDelivered: 0,
      qtyPending: 90,
      daysRemainingToOverdue: 5,
      status: "Pending"
    },
    {
      modelNo: "Carbon Fiber Ultra",
      qtyOrdered: 70,
      qtyDelivered: 0,
      qtyPending: 70,
      daysRemainingToOverdue: 5,
      status: "Pending"
    },
    {
      modelNo: "Ceramic Shield Pro",
      qtyOrdered: 55,
      qtyDelivered: 0,
      qtyPending: 55,
      daysRemainingToOverdue: 5,
      status: "Pending"
    }
  ],
  "7": [
    {
      modelNo: "Circular 1 Mineral",
      qtyOrdered: 65,
      qtyDelivered: 65,
      qtyPending: 0,
      daysRemainingToOverdue: null,
      status: "Delivered"
    },
    {
      modelNo: "Circular 2 Sapphire",
      qtyOrdered: 85,
      qtyDelivered: 0,
      qtyPending: 85,
      daysRemainingToOverdue: 12,
      status: "Pending"
    }
  ],
  "8": [
    {
      modelNo: "Square 1 Mineral",
      qtyOrdered: 95,
      qtyDelivered: 0,
      qtyPending: 95,
      daysRemainingToOverdue: 20,
      status: "Pending"
    }
  ],
  "9": [
    {
      modelNo: "Square 2 Sapphire",
      qtyOrdered: 110,
      qtyDelivered: 0,
      qtyPending: 110,
      daysRemainingToOverdue: 25,
      status: "Pending"
    }
  ]
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<Record<string, OrderDetail[]>>({});
  const [viewMode, setViewMode] = useState<'table' | 'grid' | 'kanban'>('table');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOrderId, setModalOrderId] = useState<string | null>(null);
  const [modalOrderNo, setModalOrderNo] = useState<string | null>(null);

  const handleTableViewOrder = (orderId: string, orderNo: string) => {
    setModalOrderId(orderId);
    setModalOrderNo(orderNo);
    setIsModalOpen(true);
  };

  const handleOtherViewOrder = (orderId: string, orderNo: string) => {
    setSelectedOrder({ [orderId]: sampleOrderDetails[orderId] });
    setSelectedOrderId(orderId);
    setModalOrderNo(orderNo);
  };

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    return order.status.toLowerCase() === activeTab;
  });

  const renderView = () => {
    switch (viewMode) {
      case 'table':
        return <OrderTable orders={filteredOrders} onViewOrder={handleTableViewOrder} />;
      case 'grid':
        return <GridView orders={filteredOrders} onViewOrder={handleOtherViewOrder} />;
      case 'kanban':
        return <KanbanView orders={filteredOrders} onViewOrder={handleOtherViewOrder} orderDetails={selectedOrder} selectedOrderId={selectedOrderId} />;
      default:
        return <OrderTable orders={filteredOrders} onViewOrder={handleTableViewOrder} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto px-4">
          <div className="h-full py-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full">
              <div className="p-5 border-b border-gray-200">
                <Header 
                  title="Orders" 
                  description="Manage phone orders, email invoices, and gather payments with the help of draft orders."
                  actions={
                    <div className="flex items-center gap-3">
                      <ActionButton 
                        icon={<RefreshCw className="h-4 w-4" />}
                        className="bg-[#EEEEEE] hover:bg-[#E0E0E0] text-gray-700"
                      >
                        Sync
                      </ActionButton>
                      <ActionButton 
                        variant="primary" 
                        className="px-[18px] py-[10px] shadow-[0px_4px_8px_rgba(0,0,0,0.1)] bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        New Order
                      </ActionButton>
                    </div>
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
                <StatCard
                  icon={<Package className="h-5 w-5" />}
                  value="8"
                  label="Total orders"
                  className="bg-gradient-to-br from-[#FFF5F0] to-[#FFE4D9] rounded-2xl shadow-sm"
                  iconColor="bg-white/60"
                  iconTextColor="text-[#FF5722]"
                  valueClassName="text-3xl font-bold text-[#FF5722]"
                  labelClassName="text-sm font-medium text-[#FF5722]/80"
                />
                <StatCard
                  icon={<RefreshCw className="h-5 w-5" />}
                  value="12"
                  label="Items Pending"
                  className="bg-gradient-to-br from-[#FFF0FB] to-[#FFE0F4] rounded-2xl shadow-sm"
                  iconColor="bg-white/60"
                  iconTextColor="text-[#E91E63]"
                  valueClassName="text-3xl font-bold text-[#E91E63]"
                  labelClassName="text-sm font-medium text-[#E91E63]/80"
                />
                <StatCard
                  icon={<Truck className="h-5 w-5" />}
                  value="2"
                  label="Delivered Orders"
                  className="bg-gradient-to-br from-[#F0F7FF] to-[#E1EFFF] rounded-2xl shadow-sm"
                  iconColor="bg-white/60"
                  iconTextColor="text-[#2196F3]"
                  valueClassName="text-3xl font-bold text-[#2196F3]"
                  labelClassName="text-sm font-medium text-[#2196F3]/80"
                />
                <StatCard
                  icon={<LineChart className="h-5 w-5" />}
                  value="2"
                  label="Partial Orders"
                  className="bg-gradient-to-br from-[#F0FFF7] to-[#E6FFE6] rounded-2xl shadow-sm"
                  iconColor="bg-white/60"
                  iconTextColor="text-[#4CAF50]"
                  valueClassName="text-3xl font-bold text-[#4CAF50]"
                  labelClassName="text-sm font-medium text-[#4CAF50]/80"
                />
              </div>

              <div className="px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-200">
                <Tabs
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                />
                
                <div className="flex items-center gap-4">
                  <SearchBar />
                  <div className="flex items-center gap-2 bg-[#EEEEEE]/50 p-1 rounded-lg border border-gray-200">
                    <button
                      onClick={() => setViewMode('table')}
                      className={cn(
                        "p-2 rounded-md transition-colors",
                        viewMode === 'table' ? "bg-white text-gray-900 shadow-sm border border-gray-200" : "text-gray-500 hover:text-gray-700 hover:bg-[#EEEEEE]"
                      )}
                    >
                      <Layout className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('kanban')}
                      className={cn(
                        "p-2 rounded-md transition-colors",
                        viewMode === 'kanban' ? "bg-white text-gray-900 shadow-sm border border-gray-200" : "text-gray-500 hover:text-gray-700 hover:bg-[#EEEEEE]"
                      )}
                    >
                      <Columns className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={cn(
                        "p-2 rounded-md transition-colors",
                        viewMode === 'grid' ? "bg-white text-gray-900 shadow-sm border border-gray-200" : "text-gray-500 hover:text-gray-700 hover:bg-[#EEEEEE]"
                      )}
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 border-t border-gray-200 overflow-x-auto">
                <div className="min-w-full">
                  {renderView()}
                </div>
              </div>
            </div>
          </div>

          <OrderDetailsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            orderDetails={modalOrderId ? sampleOrderDetails[modalOrderId] : []}
            orderNumber={modalOrderNo || ''}
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;