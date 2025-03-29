"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Tab = {
  id: string;
  label: string;
};

type TabsProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
};

const Tabs = ({ tabs, activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="flex bg-[#F5F5F5] rounded-lg p-[2px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'relative px-3 py-1 text-sm font-medium transition-all outline-none rounded-md',
            activeTab === tab.id ? 'text-[#1a1a1a]' : 'text-[#666666] hover:text-[#1a1a1a]'
          )}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="bubble"
              className="absolute inset-0 bg-white rounded-md"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Tabs; 