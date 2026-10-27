import { ComponentProps } from "react";

export interface CalendarEvent {
    id: string;
    name: string;
    color: CalendarEventColor;
    isAllDay: boolean;
    time?: CalendarEventTime,
}

export type CalendarEventColor = 'blue' | 'green' | 'red';
export type CalendarEventTime = {
    startTime: string;
    endTime: string;
}

export type EventButtonProps = {event: CalendarEvent} & ComponentProps<'button'>;