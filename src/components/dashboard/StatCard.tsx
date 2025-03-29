import React from 'react';
import { cn } from '@/lib/utils';

type StatCardProps = {
  icon: React.ReactNode;
  iconColor?: string;
  iconTextColor?: string;
  value: string;
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
};

const StatCard = ({ 
  icon, 
  iconColor = "bg-white/60",
  iconTextColor = "text-primary",
  value, 
  label,
  className,
  valueClassName,
  labelClassName
}: StatCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-2xl relative overflow-hidden border border-white/10",
      className
    )}>
      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div className={cn("p-3 rounded-xl shadow-sm", iconColor)}>
            <div className={iconTextColor}>
              {icon}
            </div>
          </div>
          <div>
            <div className={cn("text-2xl font-semibold tracking-tight mb-1 text-[#404040]", valueClassName)}>
              {value}
            </div>
            <div className={cn("text-base font-medium text-[#404040]", labelClassName)}>
              {label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard; 