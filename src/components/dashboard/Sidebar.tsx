"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Home, 
  FileText, 
  ClipboardList, 
  Layers, 
  Users, 
  FileBox,
  BarChart2, 
  Megaphone,
  Percent, 
  Store, 
  ShoppingBag,
  Timer,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  hasSub?: boolean;
  expanded?: boolean;
  onClick?: () => void;
};

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  active = false, 
  hasSub = false,
  expanded = false,
  onClick 
}: SidebarItemProps) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={cn(
          "flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors text-[#4A4A4A] text-[15px] font-medium",
          active 
            ? "bg-muted text-primary font-semibold" 
            : "hover:bg-muted hover:text-primary"
        )}
      >
        <Icon className="h-[18px] w-[18px] mr-6 text-[#4A4A4A]" />
        <span>{label}</span>
      </button>
      
      {hasSub && expanded && (
        <ul className="ml-7 mt-1 space-y-1 border-l border-border pl-2">
          <li>
            <button className="flex items-center w-full px-3 py-2 text-[15px] rounded-md transition-colors text-[#4A4A4A] font-medium hover:bg-muted hover:text-primary">
              Drafts
            </button>
          </li>
          <li>
            <button className="flex items-center w-full px-3 py-2 text-[15px] rounded-md transition-colors text-[#4A4A4A] font-medium hover:bg-muted hover:text-primary">
              Shipping labels
            </button>
          </li>
          <li>
            <button className="flex items-center w-full px-3 py-2 text-[15px] rounded-md transition-colors text-[#4A4A4A] font-medium hover:bg-muted hover:text-primary">
              Abandoned checkouts
            </button>
          </li>
        </ul>
      )}
    </li>
  );
};

const Sidebar = () => {
  const router = useRouter();
  const [expandedItem, setExpandedItem] = React.useState<string | null>("Orders");
  
  const handleLogout = async () => {
    try {
      // Add your logout API call here if needed
      // await logout();
      
      // Redirect to the correct login page URL
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const toggleExpand = (itemName: string) => {
    setExpandedItem(prev => prev === itemName ? null : itemName);
  };

  return (
    <div className="w-56 h-screen sticky top-0 flex flex-col bg-[#F8F9FA]">
      <div className="p-4">
        <div className="flex items-center px-3 py-2 rounded-lg bg-white shadow-sm">
          <div className="bg-black text-white p-1 rounded">
            <FileBox size={16} />
          </div>
          <span className="font-medium ml-2">CadraTec</span>
          <button className="ml-auto p-1 rounded-md hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </button>
        </div>
      </div>
      
      <div className="px-3 py-2 flex-1 overflow-auto">
        <nav>
          <ul className="space-y-1">
            <SidebarItem icon={Home} label="Home" />
            <SidebarItem icon={FileText} label="Transactions" />
            <SidebarItem 
              icon={ClipboardList} 
              label="Orders" 
              active={true} 
              hasSub={true}
              expanded={expandedItem === "Orders"}
              onClick={() => toggleExpand("Orders")}
            />
            <SidebarItem icon={Layers} label="Catalog" />
            <SidebarItem icon={Users} label="Customers" />
            <SidebarItem icon={FileBox} label="Content" />
            <SidebarItem icon={BarChart2} label="Analytics" />
            <SidebarItem icon={Megaphone} label="Campaigns" />
            <SidebarItem icon={Percent} label="Discounts" />
          </ul>
        </nav>
        
        <div className="mt-8">
          <h3 className="text-xs uppercase text-[#404040] font-semibold mb-2 px-3">
            Channels
          </h3>
          <ul className="space-y-1">
            <SidebarItem icon={Store} label="Online Store" />
            <SidebarItem icon={ShoppingBag} label="Retail POS" />
            <SidebarItem icon={ShoppingBag} label="Shop" />
          </ul>
        </div>
      </div>

      <div className="px-3 py-2">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 text-[15px] rounded-md transition-colors text-[#4A4A4A] font-medium hover:bg-red-50 hover:text-red-600 group"
        >
          <LogOut className="h-[18px] w-[18px] text-[#4A4A4A] group-hover:text-red-600" />
          <span>Logout</span>
        </button>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Timer className="w-4 h-4" />
            <span className="text-sm font-medium">Updates</span>
          </div>
          <p className="text-xs text-[#4A4A4A]">Your News/Notifications will appear here</p>
          <button className="mt-2 text-xs font-medium text-primary hover:underline">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 