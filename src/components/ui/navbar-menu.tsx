"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function HoveredLink({ children, ...props }: any) {
  return (
    <Link {...props} className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white">
      {children}
    </Link>
  );
}

export function Menu({
  setActive,
  children,
}: {
  setActive: (active: string | null) => void;
  children: React.ReactNode;
}) {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-input flex justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
}

export function MenuItem({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (active: string | null) => void;
  active: string | null;
  item: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex items-center" onMouseEnter={() => setActive(item)}>
      <span className="text-sm text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white cursor-pointer">
        {item}
      </span>
      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-full mt-4 left-1/2 -translate-x-1/2 min-w-[200px] rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-lg"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

export function ProductItem({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) {
  return (
    <Link href={href} className="flex space-x-4">
      <div className="relative w-32 h-16 overflow-hidden rounded-lg">
        <Image src={src} alt={title} fill className="object-cover" />
      </div>
      <div>
        <h3 className="font-medium text-neutral-900 dark:text-neutral-100">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">{description}</p>
      </div>
    </Link>
  );
} 