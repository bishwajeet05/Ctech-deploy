"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard,
  ClipboardList,
  Book,
  MessageSquare,
  FileBox,
  LogOut,
  Timer
} from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  active = false,
  onClick 
}: SidebarItemProps) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={cn(
          "flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors text-[#4A4A4A] text-[15px] font-medium",
          active 
            ? "bg-blue-100 text-[#1a237e] font-semibold" 
            : "hover:bg-blue-50 hover:text-blue-900"
        )}
      >
        <Icon className={cn(
          "h-[18px] w-[18px] mr-6",
          active ? "text-[#1a237e]" : "text-[#4A4A4A]"
        )} />
        <span>{label}</span>
      </button>
    </li>
  );
};

type SidebarProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

const Sidebar = ({ activePage, setActivePage }: SidebarProps) => {
  const router = useRouter();
  
  const handleLogout = async () => {
    try {
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="w-56 h-screen sticky top-0 flex flex-col bg-[#F8F9FA]">
      <div className="p-4">
        <div className="flex items-center justify-center py-2">
          <Image
            src="/images/Dashboard/logo.webp"
            alt="CadraTec Logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
      
      <div className="px-6 mb-4">
        <h2 className="text-lg text-gray-900 font-medium">Good Morning,</h2>
        <p className="text-xl font-semibold text-gray-900">Mr. James</p>
      </div>
      
      <div className="px-3 py-2 flex-1 overflow-auto">
        <nav>
          <ul className="space-y-1">
            <SidebarItem 
              icon={ClipboardList} 
              label="Orders" 
              active={activePage === "Orders"}
              onClick={() => setActivePage("Orders")}
            />
            <SidebarItem 
              icon={Book} 
              label="Development Book" 
              active={activePage === "Development Book"}
              onClick={() => setActivePage("Development Book")}
            />
            <SidebarItem 
              icon={MessageSquare} 
              label="Messages" 
              active={activePage === "Messages"}
              onClick={() => setActivePage("Messages")}
            />
            <li className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-3 py-2 text-[15px] rounded-md transition-colors text-[#4A4A4A] font-medium hover:bg-red-50 hover:text-red-600 group"
              >
                <LogOut className="h-[18px] w-[18px] mr-6 text-[#4A4A4A] group-hover:text-red-600" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Timer className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-semibold text-gray-900">Updates</span>
          </div>
          <p className="text-xs text-gray-600">Your News/Notifications will appear here</p>
          <button className="mt-2 text-xs font-medium text-blue-600 hover:underline">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 