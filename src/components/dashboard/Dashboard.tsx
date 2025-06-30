"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
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
  AlertCircle,
  Book
} from 'lucide-react';
import { cn } from '@/lib/utils';
import OrderDetailsModal, { OrderDetail } from './OrderDetailsModal';
import PDFViewerModal from '../shared/PDFViewerModal';
import ChatSupport from './ChatSupport';

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

const statusOptions = ["Late", "Delivered", "On Time"];
function getRandomStatus(index: number) {
  return statusOptions[index % statusOptions.length];
}

const orders = [
  {
    order: "2",
    poNumber: "896821490",
    orderConfirmation: "ON-00274",
    orderConfirmationDate: "25-Jul-24",
    requiredDeliveryDate: "30-Jul-24",
    status: getRandomStatus(0)
  },
  {
    order: "3",
    poNumber: "896821490",
    orderConfirmation: "ON-00275",
    orderConfirmationDate: "25-Jul-24",
    requiredDeliveryDate: "01-Aug-24",
    status: getRandomStatus(1)
  },
  {
    order: "4",
    poNumber: "896821490",
    orderConfirmation: "ON-00276",
    orderConfirmationDate: "25-Jul-24",
    requiredDeliveryDate: "02-Aug-24",
    status: getRandomStatus(2)
  },
  {
    order: "5",
    poNumber: "896821490",
    orderConfirmation: "ON-00277",
    orderConfirmationDate: "25-Jul-24",
    requiredDeliveryDate: "05-Aug-24",
    status: getRandomStatus(3)
  },
  {
    order: "6",
    poNumber: "896821490",
    orderConfirmation: "ON-00278",
    orderConfirmationDate: "25-Jul-24",
    requiredDeliveryDate: "07-Aug-24",
    status: getRandomStatus(4)
  },
  {
    order: "7",
    poNumber: "PO-629014",
    orderConfirmation: "ON-00279",
    orderConfirmationDate: "25-Jul-24",
    requiredDeliveryDate: "15-Mar-25",
    status: getRandomStatus(5)
  },
  {
    order: "8",
    poNumber: "PO-629014",
    orderConfirmation: "ON-00280",
    orderConfirmationDate: "26-Jul-24",
    requiredDeliveryDate: "20-Aug-24",
    status: getRandomStatus(6)
  },
  {
    order: "9",
    poNumber: "PO-629014",
    orderConfirmation: "ON-00281",
    orderConfirmationDate: "26-Jul-24",
    requiredDeliveryDate: "25-Aug-24",
    status: getRandomStatus(7)
  }
];

const modelNumbers = ["632760", "216902", "9223333", "6842133"];
function getRandomModelNo(index: number) {
  return modelNumbers[index % modelNumbers.length];
}

const sampleOrderDetails: Record<string, OrderDetail[]> = {
  "2": [
    {
      modelNo: getRandomModelNo(0),
      qtyOrdered: 50,
      qtyDelivered: 50,
      qtyPending: 0,
      remarks: "Will be delivered in end of Feb",
      confirmedDeliveryDate: "2024-02-28",
      actualDeliveryDate: "2024-02-28"
    },
    {
      modelNo: getRandomModelNo(1),
      qtyOrdered: 60,
      qtyDelivered: 60,
      qtyPending: 0,
      remarks: "Will be delivered in mid of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    },
    {
      modelNo: getRandomModelNo(2),
      qtyOrdered: 60,
      qtyDelivered: 60,
      qtyPending: 0,
      remarks: "Will be delivered in end of Feb",
      confirmedDeliveryDate: "2024-02-28",
      actualDeliveryDate: "2024-02-28"
    },
    {
      modelNo: getRandomModelNo(3),
      qtyOrdered: 50,
      qtyDelivered: 50,
      qtyPending: 0,
      remarks: "Will be delivered in mid of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    },
    {
      modelNo: getRandomModelNo(4),
      qtyOrdered: 3,
      qtyDelivered: 3,
      qtyPending: 0,
      remarks: "Will be delivered in end of Feb",
      confirmedDeliveryDate: "2024-02-28",
      actualDeliveryDate: "2024-02-28"
    }
  ],
  "3": [
    {
      modelNo: getRandomModelNo(5),
      qtyOrdered: 75,
      qtyDelivered: 75,
      qtyPending: 0,
      remarks: "Will be delivered in mid of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    },
    {
      modelNo: getRandomModelNo(6),
      qtyOrdered: 45,
      qtyDelivered: 0,
      qtyPending: 45,
      remarks: "Awaiting for diamond cost",
      confirmedDeliveryDate: "2024-02-28",
      actualDeliveryDate: "2024-02-28"
    },
    {
      modelNo: getRandomModelNo(7),
      qtyOrdered: 30,
      qtyDelivered: 30,
      qtyPending: 0,
      remarks: "Will be delivered in end of Feb",
      confirmedDeliveryDate: "2024-02-28",
      actualDeliveryDate: "2024-02-28"
    }
  ],
  "4": [
    {
      modelNo: getRandomModelNo(8),
      qtyOrdered: 100,
      qtyDelivered: 0,
      qtyPending: 100,
      remarks: "Will be delivered in mid of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    },
    {
      modelNo: getRandomModelNo(9),
      qtyOrdered: 80,
      qtyDelivered: 0,
      qtyPending: 80,
      remarks: "Will be delivered in mid of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    }
  ],
  "5": [
    {
      modelNo: getRandomModelNo(10),
      qtyOrdered: 25,
      qtyDelivered: 25,
      qtyPending: 0,
      remarks: "Will be delivered in mid of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    },
    {
      modelNo: getRandomModelNo(11),
      qtyOrdered: 40,
      qtyDelivered: 40,
      qtyPending: 0,
      remarks: "Will be delivered in end of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    },
    {
      modelNo: getRandomModelNo(12),
      qtyOrdered: 35,
      qtyDelivered: 35,
      qtyPending: 0,
      remarks: "Will be delivered in mid of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    }
  ],
  "6": [
    {
      modelNo: getRandomModelNo(13),
      qtyOrdered: 90,
      qtyDelivered: 0,
      qtyPending: 90,
      remarks: "Will be delivered in end of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    },
    {
      modelNo: getRandomModelNo(14),
      qtyOrdered: 70,
      qtyDelivered: 0,
      qtyPending: 70,
      remarks: "Will be delivered in mid of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    },
    {
      modelNo: getRandomModelNo(15),
      qtyOrdered: 55,
      qtyDelivered: 0,
      qtyPending: 55,
      remarks: "Will be delivered in end of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    }
  ],
  "7": [
    {
      modelNo: getRandomModelNo(16),
      qtyOrdered: 65,
      qtyDelivered: 65,
      qtyPending: 0,
      remarks: "Will be delivered in mid of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    },
    {
      modelNo: getRandomModelNo(17),
      qtyOrdered: 85,
      qtyDelivered: 0,
      qtyPending: 85,
      remarks: "Will be delivered in end of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    }
  ],
  "8": [
    {
      modelNo: getRandomModelNo(18),
      qtyOrdered: 95,
      qtyDelivered: 0,
      qtyPending: 95,
      remarks: "Will be delivered in mid of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    }
  ],
  "9": [
    {
      modelNo: getRandomModelNo(19),
      qtyOrdered: 110,
      qtyDelivered: 0,
      qtyPending: 110,
      remarks: "Will be delivered in end of Feb",
      confirmedDeliveryDate: "2024-02-15",
      actualDeliveryDate: "2024-02-15"
    }
  ]
};

const developmentBook = {
  title: "Development Book 2024",
  description: "Comprehensive guide for developers and technical specifications",
  pdfUrl: "/documents/development-book-2024.pdf",
  lastUpdated: "March 15, 2024",
  size: "2.4 MB"
};

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Orders");
  const [activeTab, setActiveTab] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<Record<string, OrderDetail[]>>({});
  const [viewMode, setViewMode] = useState<'table' | 'grid' | 'kanban'>('table');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOrderId, setModalOrderId] = useState<string | null>(null);
  const [modalOrderNo, setModalOrderNo] = useState<string | null>(null);
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

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
      <div className="flex overflow-hidden min-h-screen">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="flex-1 overflow-y-auto px-4 flex flex-col min-h-screen">
          <div className="flex-grow py-4 flex flex-col">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full min-h-full flex flex-col">
              {activePage === "Orders" && (
                <>
                  <div className="p-5 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
                        <p className="mt-1 text-sm text-gray-500">
                          Manage phone orders, email invoices, and gather payments with the help of draft orders.
                        </p>
                      </div>
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
                    </div>
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
                </>
              )}
              {activePage === "Messages" && (
                <ChatSupport />
              )}
              {activePage === "Development Book" && (
                <>
                  <div className="p-5 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold text-gray-900">Development Book</h1>
                        <p className="mt-1 text-sm text-gray-500">
                          Access the latest development documentation and technical specifications
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Book className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-lg font-medium text-gray-900">{developmentBook.title}</h2>
                          <p className="mt-1 text-sm text-gray-600">{developmentBook.description}</p>
                          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                            <span>Last updated: {developmentBook.lastUpdated}</span>
                            <span>•</span>
                            <span>Size: {developmentBook.size}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setIsPDFModalOpen(true)}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          >
                            View PDF
                          </button>
                          <a
                            href={developmentBook.pdfUrl}
                            download
                            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          >
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <PDFViewerModal
                    isOpen={isPDFModalOpen}
                    onClose={() => setIsPDFModalOpen(false)}
                    pdfUrl={developmentBook.pdfUrl}
                    title={developmentBook.title}
                  />
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;