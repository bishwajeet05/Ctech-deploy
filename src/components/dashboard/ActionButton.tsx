import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

type ActionButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  icon?: React.ReactNode;
  dropdown?: boolean;
  onClick?: () => void;
  className?: string;
};

const ActionButton = ({ 
  children, 
  variant = 'outline', 
  icon, 
  dropdown = false,
  onClick,
  className
}: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 px-4 py-2",
        variant === 'primary' 
          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
          : "border border-border bg-transparent hover:bg-secondary",
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {dropdown && <ChevronDown className="ml-2 h-4 w-4" />}
    </button>
  );
};

export default ActionButton; 