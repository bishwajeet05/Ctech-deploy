"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Clock, ArrowRight, RefreshCw, ChevronUp, ChevronDown } from 'lucide-react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

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
    className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
  >
    View
    <ArrowRight className="w-3 h-3 ml-1" />
  </button>
);

export const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-[#E8F5E9] text-[#2E7D32] border-[#A5D6A7]';
      case 'Pending':
        return 'bg-[#FFF3E0] text-[#E65100] border-[#FFCC80]';
      case 'Partial':
        return 'bg-[#E3F2FD] text-[#1565C0] border-[#90CAF9]';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
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
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});

  const columns: ColumnDef<Order>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllPageRowsSelected()}
          onChange={(e) => table.toggleAllPageRowsSelected(!!e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 bg-[#f5f5f5] accent-[#3b3b3b] checked:bg-[#3b3b3b] checked:border-[#3b3b3b] focus:ring-[#3b3b3b] focus:ring-offset-0"
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={(e) => row.toggleSelected(!!e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 bg-[#f5f5f5] accent-[#3b3b3b] checked:bg-[#3b3b3b] checked:border-[#3b3b3b] focus:ring-[#3b3b3b] focus:ring-offset-0"
        />
      ),
    },
    {
      accessorKey: "orderConfirmation",
      header: ({ column }) => {
        return (
          <button
            className="flex items-center gap-1"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Order No.
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="h-3 w-3" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="h-3 w-3" />
            ) : null}
          </button>
        );
      },
      cell: ({ row }) => (
        <span className="text-sm font-semibold text-gray-900">
          #{row.getValue("orderConfirmation")}
        </span>
      ),
    },
    {
      accessorKey: "poNumber",
      header: ({ column }) => {
        return (
          <button
            className="flex items-center gap-1"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            PO Number
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="h-3 w-3" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="h-3 w-3" />
            ) : null}
          </button>
        );
      },
      cell: ({ row }) => (
        <span className="text-sm text-gray-600">{row.getValue("poNumber")}</span>
      ),
    },
    {
      accessorKey: "orderConfirmationDate",
      header: ({ column }) => {
        return (
          <button
            className="flex items-center gap-1"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Order Confirmation Date
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="h-3 w-3" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="h-3 w-3" />
            ) : null}
          </button>
        );
      },
      cell: ({ row }) => (
        <span className="text-sm text-gray-600">
          {row.getValue("orderConfirmationDate")}
        </span>
      ),
    },
    {
      accessorKey: "requiredDeliveryDate",
      header: ({ column }) => {
        return (
          <button
            className="flex items-center gap-1"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Required Delivery Date
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="h-3 w-3" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="h-3 w-3" />
            ) : null}
          </button>
        );
      },
      cell: ({ row }) => (
        <span className="text-sm text-gray-600">
          {row.getValue("requiredDeliveryDate")}
        </span>
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return (
          <button
            className="flex items-center gap-1"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="h-3 w-3" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="h-3 w-3" />
            ) : null}
          </button>
        );
      },
      cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <ViewButton
          onClick={() =>
            onViewOrder(row.original.order, row.original.orderConfirmation)
          }
        />
      ),
    },
  ];

  const table = useReactTable({
    data: orders,
    columns,
    state: {
      sorting,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-gray-100">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-5 py-3.5 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-5 py-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable; 