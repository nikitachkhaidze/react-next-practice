import { CalendarEvent } from "./calendarEvent";

export interface Day {
    date: Date;
    events: CalendarEvent[];
}

export interface DayGridProps {
    days: Day[];
}