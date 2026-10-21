import "server-only"

import { getCalendarPageRange } from "@/utils/calendarService";
import { addDays, parseISO } from "date-fns";
import { getEventsForCalendarMonth, toCalendarEvent } from "./calendarDataService";
import type { CalendarEvent } from "../model/calendarEvent";
import type { DateKey, Day } from "../model/day";
import { getDateKey } from "../utils/getDateKey";

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
