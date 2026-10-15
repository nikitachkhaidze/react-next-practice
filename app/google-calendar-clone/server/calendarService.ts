import { getCalendarPageRange } from "@/utils/calendarService";
import type { eventsTable } from "@/db/schema";
import { addDays, parseISO } from "date-fns";
import { getDateKey, getEventsForCalendarMonth } from "./calendarDataService";
import type { CalendarEvent } from "../model/calendarEvent";
import type { DateKey, Day } from "../model/day";

export async function getCalendarDaysByDate(selectedDate: DateKey): Promise<Day[]> {
    const { startDate, endDate, daysCount } = getCalendarPageRange(parseISO(selectedDate));
    const events = await getEventsForCalendarMonth(startDate, endDate);

    const eventsByDate = new Map<string, CalendarEvent[]>();

    events.forEach(event => {
        const dayEvents = eventsByDate.get(event.date) ?? [];
        dayEvents.push(toCalendarEvent(event));
        eventsByDate.set(event.date, dayEvents);
    });

    return Array.from({ length: daysCount }, (_, index) => {
        const date = addDays(startDate, index);
        return { date, events: eventsByDate.get(getDateKey(date)) ?? [] };
    });
}

function toCalendarEvent(event: typeof eventsTable.$inferSelect): CalendarEvent {
    return {
        id: String(event.id),
        name: event.name,
        color: event.color,
        time: !event.isAllDay && event.startTime && event.endTime ? {
            startTime: parseISO(event.startTime),
            endTime: parseISO(event.endTime),
        } : undefined,
    };
}
