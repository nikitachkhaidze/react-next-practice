import { CalendarEvent } from "@/app/google-calendar-clone/model/calendarEvent";
import { getCalendarPageKey, getCalendarPageRange } from "@/utils/calendarService";
import { addDays, Day, format } from "date-fns";

const DAY_KEY_FORMAT = 'dd';

export function getCalendarDaysByDate(selectedDate: Date): Day[] {
    const { startDate, daysCount } = getCalendarPageRange(selectedDate);
    const dateToEventsMap = getDateToEventsMap(selectedDate);

    return Array.from({ length: daysCount }, (_, index) => {
        const date = addDays(startDate, index);
        return { date, events: dateToEventsMap.get(getDayKey(date)) ?? [] };
    });
}

function deserializeEvents(events: CalendarEvent[] | undefined): CalendarEvent[] {
    return (events ?? []).map(event => ({
        ...event,
        time: event.time && {
            startTime: new Date(event.time.startTime),
            endTime: new Date(event.time.endTime),
        },
    }));
}

function getDayKey(date: Date): string {
    return format(date, DAY_KEY_FORMAT);
}

function getDateToEventsMap(selectedDate: Date): Map<string, CalendarEvent[]> {
    const storedDays = localStorageService.get<Day[]>(getCalendarPageKey(selectedDate)) ?? [];

    return new Map(storedDays.map(day => [
        getDayKey(new Date(day.date)),
        deserializeEvents(day.events),
    ]));
}