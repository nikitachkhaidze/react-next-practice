import { create } from "zustand/react";
import { CalendarEvent } from "../model/calendarEvent";

export type CalendarState = {
    events: CalendarEvent[];
}

export type CalendarActions = {
    addEvent: (event: CalendarEvent) => void;
    removeEvent: (eventId: string) => void;
}

export const calendarStore = create((set) => ({
    events: [],
    addEvent: (event: CalendarEvent) => set((state) => {})
}));