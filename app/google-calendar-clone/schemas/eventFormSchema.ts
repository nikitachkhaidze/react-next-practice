import z from "zod";

export const eventFormSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 symbols long'),
  isAllDay: z.boolean(),
  startTime: z.iso.time(),
  endTime: z.iso.time(),
  color: z.enum(['blue', 'green', 'red']),
});

export type EventFormSchema = z.infer<typeof eventFormSchema>;