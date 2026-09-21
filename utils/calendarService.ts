import type { CalendarEvent } from "@/app/google-calendar-clone/model/calendarEvent";
import type { Day } from "@/app/google-calendar-clone/model/day";
import { addDays, differenceInCalendarDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from "date-fns";
import * as localStorageService from "./localStorageService";

const CALENDAR_PAGE_KEY_FORMAT = 'MM/yyyy';
const DAY_KEY_FORMAT = 'dd';

export function getCalendarPageKey(selectedDate: Date): string {
    return format(selectedDate, CALENDAR_PAGE_KEY_FORMAT);
}

export function getDatesForCalendarPage(selectedDate: Date): Date[] {
    const { startDate, daysCount } = getCalendarPageRange(selectedDate);

    return Array.from({ length: daysCount }, (_, index) => addDays(startDate, index));
}

export function getDaysForCalendarPage(selectedDate: Date): Day[] {
    const { startDate, daysCount } = getCalendarPageRange(selectedDate);
    const dateToEventsMap = getDateToEventsMap(selectedDate);

    return Array.from({ length: daysCount }, (_, index) => {
        const date = addDays(startDate, index);
        return { date, events: dateToEventsMap.get(getDayKey(date)) ?? [] };
    });
}

export function saveDaysForCalendarPage(selectedDate: Date, days: Day[]): void {
    localStorageService.set(getCalendarPageKey(selectedDate), days);
}

function getDateToEventsMap(selectedDate: Date): Map<string, CalendarEvent[]> {
    const storedDays = localStorageService.get<Day[]>(getCalendarPageKey(selectedDate)) ?? [];

    return new Map(storedDays.map(day => [
        getDayKey(new Date(day.date)),
        deserializeEvents(day.events),
    ]));
}

function getDayKey(date: Date): string {
    return format(date, DAY_KEY_FORMAT);
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

function getCalendarPageRange(selectedDate: Date): { startDate: Date; daysCount: number } {
    const startDate = startOfWeek(startOfMonth(selectedDate));
    const endDate = endOfWeek(endOfMonth(selectedDate));

    return { startDate, daysCount: differenceInCalendarDays(endDate, startDate) + 1 };
}