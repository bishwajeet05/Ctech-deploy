"use client"

import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import React, { useState, createContext, useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

interface Links {
  label: string
  href: string
  icon: React.JSX.Element | React.ReactNode
}

interface SidebarContextProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  animate: boolean
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
)

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  animate?: boolean
}) => {
  const [openState, setOpenState] = useState(false)

  const open = openProp !== undefined ? openProp : openState
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  animate?: boolean
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  )
}

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  )
}

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar()
  return (
    <motion.div
      className={cn(
        "h-screen hidden md:flex md:flex-col bg-black dark:bg-black w-[60px] flex-shrink-0 border-r border-neutral-800 relative overflow-hidden",
        className
      )}
      animate={{
        width: animate ? (open ? "240px" : "60px") : "240px",
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      <div className="flex flex-col h-full px-3 py-4">
        {children}
      </div>
    </motion.div>
  )
}

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar()
  return (
    <>
      <div
        className={cn(
          "h-14 px-4 flex flex-row md:hidden items-center justify-between bg-black dark:bg-black w-full border-b border-neutral-800",
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <Menu
            className="text-neutral-400 dark:text-neutral-400 cursor-pointer hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-black dark:bg-black p-6 z-[100] flex flex-col justify-between border-r border-neutral-800",
                className
              )}
            >
              <div
                className="absolute right-6 top-6 z-50 text-neutral-400 dark:text-neutral-400 cursor-pointer hover:text-white transition-colors"
                onClick={() => setOpen(!open)}
              >
                <X />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links
  className?: string
  props?: LinkProps
}) => {
  const { open, animate } = useSidebar()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-2 group/sidebar py-2 px-3 rounded-lg transition-all relative",
        "hover:bg-neutral-800/50",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {React.cloneElement(link.icon as React.ReactElement, {
        className: cn(
          "text-neutral-400 dark:text-neutral-400 h-5 w-5 flex-shrink-0 transition-transform duration-200",
          (link.icon as React.ReactElement).props.className,
          isHovered && "text-white scale-110"
        ),
      })}
      <AnimatePresence>
        {(open || isHovered) && (
          <motion.span
            initial={!open ? { opacity: 0, x: -10 } : false}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className={cn(
              "text-neutral-400 dark:text-neutral-400 text-sm whitespace-pre transition-colors",
              isHovered && "text-white",
              !open && "absolute left-12 bg-neutral-800 px-2 py-1 rounded-md"
            )}
          >
            {link.label}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  )
} 