"use client";

import React from 'react';
import { Search, Command, ChevronDown, Keyboard } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';

const searchOptions = [
  { id: 'order', label: 'Search by Order No.' },
  { id: 'po', label: 'Search by PO Number' },
  { id: 'status', label: 'Search by Status' },
];

const shortcuts = [
  { id: 'quick', label: 'Quick Search', shortcut: '⌘K' },
  { id: 'advanced', label: 'Advanced Search', shortcut: '⌘⇧K' },
];

const SearchBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>
          <div className="flex items-center h-9 w-[280px] rounded-md border border-gray-200 bg-white px-3 text-sm cursor-pointer">
            <Search className="h-4 w-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search orders..."
              className="flex-1 bg-transparent outline-none placeholder:text-gray-500"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
            />
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1 rounded bg-gray-100/80 px-1.5 text-[10px] font-medium text-gray-600">
                <Command className="h-3 w-3" />
                <span>K</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500 ml-1" />
            </div>
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="w-[280px] rounded-md border bg-white shadow-md animate-in fade-in-0 zoom-in-95"
            align="start"
            sideOffset={5}
          >
            <div className="p-2">
              <div className="text-xs font-medium text-gray-500 mb-2 px-2">Search Options</div>
              {searchOptions.map((option) => (
                <DropdownMenu.Item
                  key={option.id}
                  className="px-2 py-1.5 text-sm outline-none cursor-pointer rounded-sm hover:bg-gray-100 focus:bg-gray-100"
                >
                  {option.label}
                </DropdownMenu.Item>
              ))}
            </div>

            <DropdownMenu.Separator className="h-px bg-gray-200" />

            <div className="p-2">
              <div className="text-xs font-medium text-gray-500 mb-2 px-2">Shortcuts</div>
              {shortcuts.map((shortcut) => (
                <DropdownMenu.Item
                  key={shortcut.id}
                  className="px-2 py-1.5 text-sm outline-none cursor-pointer rounded-sm hover:bg-gray-100 focus:bg-gray-100 flex items-center justify-between"
                >
                  <span>{shortcut.label}</span>
                  <span className="text-xs text-gray-500 font-mono">{shortcut.shortcut}</span>
                </DropdownMenu.Item>
              ))}
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default SearchBar; 