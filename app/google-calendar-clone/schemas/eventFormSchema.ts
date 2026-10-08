import z from "zod";

const baseSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 symbols long'),
  color: z.enum(['blue', 'green', 'red']),
})

export const eventFormSchema = z.discriminatedUnion('isAllDay', [
  baseSchema.extend({
    isAllDay: z.literal(true),
  }),
  baseSchema.extend({
    isAllDay: z.literal(false),
    startTime: z.iso.time(),
    endTime: z.iso.time(),
  }),
]).refine((data) => data.isAllDay || data.startTime <= data.endTime, {
  message: "Start time must be before end time",
  path: ['startTime'],
})

export type EventFormSchema = z.infer<typeof eventFormSchema>;