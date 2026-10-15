import { db } from "@/db/db";
import { eventsTable } from "@/db/schema";
import { format } from "date-fns";
import { DateKey } from "../model/day";
import { gte, and, lte } from "drizzle-orm";

export async function getEventsForCalendarMonth(startDate: Date, endDate: Date) {
    const startDateKey = getDateKey(startDate);
    const endDateKey = getDateKey(endDate);

    const result = await db.select().from(eventsTable).where(
        and(
            gte(eventsTable.date, startDateKey),
            lte(eventsTable.date, endDateKey)
        )
    ).orderBy(eventsTable.date, eventsTable.startTime);

    return result;
}

export function getDateKey(date: Date): DateKey {
    return format(date, 'yyyy-MM-dd') as DateKey;
}