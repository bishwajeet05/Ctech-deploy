import {
  pgTable,
  text,
  timestamp,
  varchar,
  integer,
  real,
  pgEnum,
  primaryKey,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums
export const userRoleEnum = pgEnum("user_role", ["ADMIN", "USER"]);
export type UserRole = (typeof userRoleEnum.enumValues)[number];

export const orderStatusEnum = pgEnum("order_status", [
  "pending",
  "processing",
  "completed",
  "cancelled",
  "partial",
]);
export const orderItemStatusEnum = pgEnum("order_item_status", [
  "pending",
  "partial",
  "delivered",
]);

// Tables
export const users = pgTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  emailVerified: timestamp("emailVerified"),
  image: text("image"),
  hashedPassword: text("hashedPassword").notNull(),
  role: userRoleEnum("role").default("USER").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const sessions = pgTable("sessions", {
  id: varchar("id", { length: 255 }).primaryKey(),
  sessionToken: varchar("sessionToken", { length: 255 }).notNull().unique(),
  userId: varchar("userId", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires").notNull(),
});

export const documents = pgTable("documents", {
  id: varchar("id", { length: 255 }).primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  url: text("url").notNull(),
  type: varchar("type", { length: 255 }).notNull(),
  size: integer("size").notNull(),
  userId: varchar("userId", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const orders = pgTable("orders", {
  id: varchar("id", { length: 255 }).primaryKey(),
  number: varchar("number", { length: 255 }).notNull().unique(),
  poNumber: varchar("poNumber", { length: 255 }),
  orderConfirmation: varchar("orderConfirmation", { length: 255 }),
  orderConfirmationDate: timestamp("orderConfirmationDate"),
  requiredDeliveryDate: timestamp("requiredDeliveryDate"),
  status: orderStatusEnum("status").default("pending").notNull(),
  total: real("total").notNull(),
  userId: varchar("userId", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const orderItems = pgTable("order_items", {
  id: varchar("id", { length: 255 }).primaryKey(),
  orderId: varchar("orderId", { length: 255 })
    .notNull()
    .references(() => orders.id, { onDelete: "cascade" }),
  modelNo: varchar("modelNo", { length: 255 }).notNull(),
  qtyOrdered: integer("qtyOrdered").notNull(),
  qtyDelivered: integer("qtyDelivered").default(0).notNull(),
  qtyPending: integer("qtyPending").notNull(),
  status: orderItemStatusEnum("status").default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  documents: many(documents),
  orders: many(orders),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export const documentsRelations = relations(documents, ({ one }) => ({
  user: one(users, {
    fields: [documents.userId],
    references: [users.id],
  }),
}));

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
  orderItems: many(orderItems),
}));

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id],
  }),
})); 