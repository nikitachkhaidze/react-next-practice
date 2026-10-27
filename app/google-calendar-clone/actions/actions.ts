'use server';

import { revalidatePath } from "next/cache";
import { eventFormSchema, EventFormSchema } from "../schemas/eventFormSchema";
import { insertEvent, updateEvent } from "../server/calendarDataService";
import { CalendarEventRow } from "../server/model/calendarEventRow";

export async function createEventAction(event: EventFormSchema) {
    const result = eventFormSchema.safeParse(event);

    if (!result.success) {
        throw new Error("Invalid event data");
    }

    await insertEvent(event);
    
    revalidatePath('/google-calendar-clone');
}

export async function editEventAction(id: number, event: EventFormSchema) {
    const result = eventFormSchema.safeParse(event);

    if (!result.success) {
        throw new Error("Invalid event data");
    }

     const updatedEvent: CalendarEventRow = {
        ...event,
        id,
        startTime: event.isAllDay ? null : event.startTime,
        endTime: event.isAllDay ? null : event.endTime,
    };

    await updateEvent(updatedEvent);
    
    revalidatePath('/google-calendar-clone');
}