import z from "zod";

function requiredTimeSchema(label: string) {
  return z.iso.time({
    error: (issue) => issue.input === '' || issue.input === undefined
      ? `${label} is required`
      : undefined,
  });
}

const baseSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 symbols long'),
  color: z.enum(['blue', 'green', 'red']),
  date: z.string(),
})

export const eventFormSchema = z.discriminatedUnion('isAllDay', [
  baseSchema.extend({
    isAllDay: z.literal(true),
  }),
  baseSchema.extend({
    isAllDay: z.literal(false),
    startTime: requiredTimeSchema('Start time'),
    endTime: requiredTimeSchema('End time'),
  }),
]).refine((data) => data.isAllDay || data.startTime <= data.endTime, {
  message: "Start time must be before end time",
  path: ['root', 'timeRange'],
})

export type EventFormSchema = z.infer<typeof eventFormSchema>;