import { CalendarEvent } from "./calendarEvent";

export interface Day {
    date: Date;
    events: CalendarEvent[];
}

export interface DayGridProps {
    days: Day[];
}

export type DateKey = `${number}-${number}-${number}`;
