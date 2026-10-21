import "server-only"

import { db } from "@/db/db";
import { eventsTable } from "@/db/schema";
import { gte, and, lte } from "drizzle-orm";
import { getDateKey } from "../utils/getDateKey";
import { EventFormSchema } from "../schemas/eventFormSchema";
import { CalendarEvent } from "../model/calendarEvent";
import { parseISO } from "date-fns";
import { CalendarEventRow } from "./model/calendarEventRow";

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

export function toCalendarEvent(event: CalendarEventRow): CalendarEvent {
    return {
        id: String(event.id),
        name: event.name,
        color: event.color,
        isAllDay: event.isAllDay,
        time: !event.isAllDay && event.startTime && event.endTime ? {
            startTime: parseISO(event.startTime),
            endTime: parseISO(event.endTime),
        } : undefined,
    };
}
