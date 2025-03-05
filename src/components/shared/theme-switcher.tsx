"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Paintbrush } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes = [
  {
    name: "Modern Light",
    value: "theme-modern-light",
    color: "hsl(214 100% 48%)",
  },
  {
    name: "Elegant Dark",
    value: "theme-elegant-dark",
    color: "hsl(239 84% 67%)",
  },
  {
    name: "Nature Light",
    value: "theme-nature-light",
    color: "hsl(158 94% 30%)",
  },
  {
    name: "Royal Dark",
    value: "theme-royal-dark",
    color: "hsl(271 86% 56%)",
  },
  {
    name: "Sunset Light",
    value: "theme-sunset-light",
    color: "hsl(24 93% 53%)",
  },
  {
    name: "Ocean Dark",
    value: "theme-ocean-dark",
    color: "hsl(187 95% 43%)",
  },
  {
    name: "Minimal Light",
    value: "theme-minimal-light",
    color: "hsl(240 6% 10%)",
  },
  {
    name: "Neon Dark",
    value: "theme-neon-dark",
    color: "hsl(158 84% 39%)",
  },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative h-8 w-8">
          <Paintbrush className="h-4 w-4 rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => setTheme(t.value)}
            className="flex items-center gap-2"
          >
            <div
              className="h-4 w-4 rounded-full border"
              style={{ backgroundColor: t.color }}
            />
            <span className={theme === t.value ? "font-medium" : ""}>
              {t.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 