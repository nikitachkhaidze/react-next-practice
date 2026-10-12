import { addDays, differenceInCalendarDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from "date-fns";

const CALENDAR_PAGE_KEY_FORMAT = 'MM/yyyy';

export function getCalendarPageKey(selectedDate: Date): string {
    return format(selectedDate, CALENDAR_PAGE_KEY_FORMAT);
}

export function getDatesForCalendarPage(selectedDate: Date): Date[] {
    const { startDate, daysCount } = getCalendarPageRange(selectedDate);

    return Array.from({ length: daysCount }, (_, index) => addDays(startDate, index));
}

export function getCalendarPageRange(selectedDate: Date): { startDate: Date; daysCount: number } {
    const startDate = startOfWeek(startOfMonth(selectedDate));
    const endDate = endOfWeek(endOfMonth(selectedDate));

    return { startDate, daysCount: differenceInCalendarDays(endDate, startDate) + 1 };
}