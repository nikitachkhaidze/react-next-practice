import type { eventsTable } from "@/db/schema";

export type CalendarEventRow = typeof eventsTable.$inferSelect;