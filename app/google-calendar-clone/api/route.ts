import { db } from "@/db/db";
import { eventsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

  await db.insert(eventsTable).values({ name: 'Sample Event', date: '2026-01-01', color: 'blue', isAllDay: true });
  const result = await db.select().from(eventsTable);

  return NextResponse.json(result);
}