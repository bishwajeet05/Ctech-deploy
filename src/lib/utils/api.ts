import axios from "axios"
import { getSession } from "next-auth/react"

const api = axios.create({
  baseURL: "/api",
})

// Add auth token to requests
api.interceptors.request.use(async (config) => {
  const session = await getSession()
  if (session) {
    config.headers.Authorization = `Bearer ${session.user.token}`
  }
  return config
})

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      window.location.href = "/admin/login"
    }
    return Promise.reject(error)
  }
)

// API endpoints
export const endpoints = {
  auth: {
    login: (data: { email: string; password: string }) =>
      api.post("/auth/login", data),
    forgotPassword: (data: { email: string }) =>
      api.post("/auth/forgot-password", data),
    resetPassword: (data: { token: string; password: string }) =>
      api.post("/auth/reset-password", data),
  },
  users: {
    list: () => api.get("/users"),
    getById: (id: string) => api.get(`/users/${id}`),
    create: (data: any) => api.post("/users", data),
    update: (id: string, data: any) => api.put(`/users/${id}`, data),
    delete: (id: string) => api.delete(`/users/${id}`),
  },
  clients: {
    list: () => api.get("/clients"),
    getById: (id: string) => api.get(`/clients/${id}`),
    create: (data: any) => api.post("/clients", data),
    update: (id: string, data: any) => api.put(`/clients/${id}`, data),
    delete: (id: string) => api.delete(`/clients/${id}`),
  },
  orders: {
    list: () => api.get("/orders"),
    getById: (id: string) => api.get(`/orders/${id}`),
    create: (data: any) => api.post("/orders", data),
    update: (id: string, data: any) => api.put(`/orders/${id}`, data),
    delete: (id: string) => api.delete(`/orders/${id}`),
  },
  analytics: {
    dashboard: () => api.get("/analytics/dashboard"),
    orders: () => api.get("/analytics/orders"),
    clients: () => api.get("/analytics/clients"),
    users: () => api.get("/analytics/users"),
  },
  settings: {
    get: () => api.get("/settings"),
    update: (data: any) => api.put("/settings", data),
  },
  logs: {
    list: (params: any) => api.get("/logs", { params }),
  },
}

export default api 