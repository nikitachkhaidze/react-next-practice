'use server';

import { revalidatePath } from "next/cache";
import { eventFormSchema, EventFormSchema } from "../schemas/eventFormSchema";
import { insertEvent } from "../server/calendarDataService";

export async function createEventAction(event: EventFormSchema) {
    const result = eventFormSchema.safeParse(event);

    if (!result.success) {
        throw new Error("Invalid event data");
    }

    await insertEvent(event);
    
    revalidatePath('/google-calendar-clone');
}