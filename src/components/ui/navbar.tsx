"use client";

import { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./navbar-menu";
import { Button } from "./button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <Link href="/" className="flex items-center">
        <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Cadratec</span>
      </Link>

      <div className="hidden md:flex items-center space-x-4">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="flex flex-col space-y-4 p-4">
              <ProductItem
                title="Cadratec Pro"
                description="Full-featured solution for automotive professionals"
                href="/products/pro"
                src="/images/pro.jpg"
              />
              <ProductItem
                title="Cadratec Lite"
                description="Essential tools for small workshops"
                href="/products/lite"
                src="/images/lite.jpg"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-2 p-4">
              <HoveredLink href="/services/consulting">Consulting</HoveredLink>
              <HoveredLink href="/services/training">Training</HoveredLink>
              <HoveredLink href="/services/support">Support</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-2 p-4">
              <HoveredLink href="/contact/sales">Sales</HoveredLink>
              <HoveredLink href="/contact/support">Support</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>

      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        {session ? (
          <Link href="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
        ) : (
          <Link href="/auth/login">
            <Button variant="outline">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
} 