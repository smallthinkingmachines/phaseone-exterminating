import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { contacts, subscribers } from "@/db/schema";
import { desc, eq, like, or } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tab = searchParams.get("tab") ?? "contacts";
  const search = searchParams.get("search") ?? "";

  if (tab === "subscribers") {
    const rows = await db
      .select()
      .from(subscribers)
      .orderBy(desc(subscribers.createdAt));
    return NextResponse.json({ subscribers: rows });
  }

  let query = db.select().from(contacts).orderBy(desc(contacts.createdAt));

  if (search) {
    // @ts-expect-error drizzle where chaining
    query = query.where(
      or(
        like(contacts.name, `%${search}%`),
        like(contacts.email, `%${search}%`)
      )
    );
  }

  const rows = await query;
  const unreadCount = rows.filter((r) => r.read === 0).length;

  return NextResponse.json({ contacts: rows, unreadCount });
}

export async function PATCH(request: NextRequest) {
  const { id, read } = await request.json();

  if (typeof id !== "number" || typeof read !== "number") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  await db.update(contacts).set({ read }).where(eq(contacts.id, id));

  return NextResponse.json({ success: true });
}
