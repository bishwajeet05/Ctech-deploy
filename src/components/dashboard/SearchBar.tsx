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
            className="w-[280px] rounded-md border bg-white shadow-md animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            align="start"
            sideOffset={5}
          >
            <div className="p-2">
              <div className="text-xs font-medium text-gray-900 mb-2 px-2">Search Options</div>
              {searchOptions.map((option) => (
                <DropdownMenu.Item
                  key={option.id}
                  className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none text-gray-900 focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900"
                >
                  {option.label}
                </DropdownMenu.Item>
              ))}
            </div>

            <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />

            <div className="p-2">
              <div className="text-xs font-medium text-gray-900 mb-2 px-2">Shortcuts</div>
              {shortcuts.map((shortcut) => (
                <DropdownMenu.Item
                  key={shortcut.id}
                  className="relative flex w-full cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none text-gray-900 focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900"
                >
                  <span>{shortcut.label}</span>
                  <span className="text-xs text-gray-600 font-mono">{shortcut.shortcut}</span>
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