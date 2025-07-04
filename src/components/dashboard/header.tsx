"use client";

import React from 'react';
import Image from 'next/image';
import { Bell, Settings } from 'lucide-react';

type HeaderProps = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
};

const Header = ({ title, description, actions }: HeaderProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h1>
        <div className="flex items-center space-x-4">
          <button className="p-1.5 rounded-full hover:bg-muted transition-colors">
            <Bell size={20} className="text-muted-foreground" />
          </button>
          <button className="p-1.5 rounded-full hover:bg-muted transition-colors">
            <Settings size={20} className="text-muted-foreground" />
          </button>
          <button className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/images/Dashboard/profile.webp"
              alt="Profile"
              fill
              className="object-cover"
            />
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">{description}</p>
        {actions}
      </div>
    </div>
  );
};

export default Header; 