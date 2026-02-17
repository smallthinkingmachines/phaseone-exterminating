import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const contacts = sqliteTable("contacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  address: text("address"),
  hearAbout: text("hear_about"),
  message: text("message").notNull(),
  createdAt: text("created_at").default(sql`(datetime('now'))`),
  read: integer("read").default(0),
});

export const subscribers = sqliteTable("subscribers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  name: text("name"),
  source: text("source").default("squarespace-import"),
  createdAt: text("created_at").default(sql`(datetime('now'))`),
});
