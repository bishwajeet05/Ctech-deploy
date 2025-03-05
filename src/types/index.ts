import { Icons } from "@/components/ui/icons"

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface FooterItem {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}

export interface Option {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface DataTableSearchableColumn<TData> {
  id: keyof TData
  title: string
}

export interface DataTableFilterableColumn<TData>
  extends DataTableSearchableColumn<TData> {
  options: Option[]
}

// API response types
export type ApiResponse<T> = {
  data?: T
  error?: string
  message?: string
  status: number
}

// Auth types
export type UserRole = "admin" | "user"

export interface User {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  role: UserRole
}

// Form types
export interface FormResponse {
  success: boolean
  message: string
} 