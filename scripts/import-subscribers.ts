#!/usr/bin/env tsx
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { subscribers } from "../src/db/schema";

const csvPath = process.argv[2];
if (!csvPath) {
  console.error("Usage: npx tsx scripts/import-subscribers.ts path/to/export.csv");
  process.exit(1);
}

const dbPath = path.join(process.cwd(), "data", "phaseone.db");
const sqlite = new Database(dbPath);
const db = drizzle(sqlite);

const content = fs.readFileSync(csvPath, "utf8");
const records = parse(content, { columns: true, skip_empty_lines: true });

let imported = 0;
let skipped = 0;

for (const record of records) {
  const email = (record.email ?? record.Email ?? "").trim();
  if (!email) { skipped++; continue; }

  const name = (record.name ?? record.Name ?? record["First Name"] ?? "").trim() || null;
  const createdAt = record.createdAt ?? record["Created At"] ?? record.date ?? null;

  try {
    db.insert(subscribers).values({
      email,
      name,
      source: "squarespace-import",
      ...(createdAt ? { createdAt } : {}),
    }).run();
    imported++;
  } catch {
    skipped++;
  }
}

console.log(`Import complete: ${imported} imported, ${skipped} skipped.`);
sqlite.close();
