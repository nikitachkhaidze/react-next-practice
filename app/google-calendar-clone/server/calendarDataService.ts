import "server-only"

import { db } from "@/db/db";
import { eventsTable } from "@/db/schema";
import { gte, and, lte, eq } from "drizzle-orm";
import { getDateKey } from "../utils/getDateKey";
import { CalendarEvent } from "../model/calendarEvent";
import { CalendarEventRow } from "./model/calendarEventRow";
import { EventFormSchema } from "../schemas/eventFormSchema";

export async function getEventsForCalendarMonth(startDate: Date, endDate: Date) {
    const startDateKey = getDateKey(startDate);
    const endDateKey = getDateKey(endDate);

    const result: typeof eventsTable.$inferSelect[] = await db.select().from(eventsTable).where(
        and(
            gte(eventsTable.date, startDateKey),
            lte(eventsTable.date, endDateKey)
        )
    ).orderBy(eventsTable.date, eventsTable.startTime);

    return result;
}

export async function insertEvent(event: EventFormSchema) {
    await db.insert(eventsTable).values(event);
}

export async function updateEvent(event: CalendarEventRow) {
    await db.update(eventsTable).set(event).where(eq(eventsTable.id, event.id));
}

export function toCalendarEvent(event: CalendarEventRow): CalendarEvent {
    return {
        id: event.id,
        name: event.name,
        color: event.color,
        isAllDay: event.isAllDay,
        time: !event.isAllDay && event.startTime && event.endTime ? {
            startTime: event.startTime,
            endTime: event.endTime,
        } : undefined,
    };
}
