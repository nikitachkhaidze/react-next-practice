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
    startTime: Date;
    endTime: Date;
}

export type EventButtonProps = {event: CalendarEvent} & ComponentProps<'button'>;