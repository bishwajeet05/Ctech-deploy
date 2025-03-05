import { create } from "zustand"
import { persist } from "zustand/middleware"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "manager" | "user"
}

interface AppState {
  user: User | null
  isLoading: boolean
  sidebarOpen: boolean
  theme: "light" | "dark"
  setUser: (user: User | null) => void
  setLoading: (isLoading: boolean) => void
  setSidebarOpen: (open: boolean) => void
  setTheme: (theme: "light" | "dark") => void
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      sidebarOpen: true,
      theme: "light",
      setUser: (user) => set({ user }),
      setLoading: (isLoading) => set({ isLoading }),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "app-storage",
      partialize: (state) => ({
        theme: state.theme,
        sidebarOpen: state.sidebarOpen,
      }),
    }
  )
)

// Notifications store
interface Notification {
  id: string
  type: "info" | "success" | "warning" | "error"
  title: string
  message: string
  read: boolean
  createdAt: Date
}

interface NotificationState {
  notifications: Notification[]
  unreadCount: number
  addNotification: (notification: Omit<Notification, "id" | "read" | "createdAt">) => void
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  removeNotification: (id: string) => void
  clearAll: () => void
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  unreadCount: 0,
  addNotification: (notification) =>
    set((state) => {
      const newNotification: Notification = {
        id: Math.random().toString(36).substring(7),
        read: false,
        createdAt: new Date(),
        ...notification,
      }
      return {
        notifications: [newNotification, ...state.notifications],
        unreadCount: state.unreadCount + 1,
      }
    }),
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
      unreadCount: state.unreadCount - 1,
    })),
  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
      unreadCount: 0,
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
      unreadCount: state.unreadCount - (state.notifications.find((n) => n.id === id)?.read ? 0 : 1),
    })),
  clearAll: () =>
    set({
      notifications: [],
      unreadCount: 0,
    }),
}))

// Settings store
interface Settings {
  emailNotifications: boolean
  orderNotifications: boolean
  securityAlerts: boolean
  maintenanceMode: boolean
  sessionTimeout: number
}

interface SettingsState {
  settings: Settings
  updateSettings: (settings: Partial<Settings>) => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: {
        emailNotifications: true,
        orderNotifications: true,
        securityAlerts: true,
        maintenanceMode: false,
        sessionTimeout: 30,
      },
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
    }),
    {
      name: "settings-storage",
    }
  )
) 