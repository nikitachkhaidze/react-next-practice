import { ComponentProps } from "react";

export interface CalendarEvent {
    name: string;
    color: CalendarEventColor;
    time?: CalendarEventTime,
}

export type CalendarEventColor = 'blue' | 'green' | 'red';
export type CalendarEventTime = {
    startTime: Date;
    endTime: Date;
}

export type EventButtonProps = {event: CalendarEvent} & ComponentProps<'button'>;