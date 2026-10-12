import { sql } from "drizzle-orm";
import { check, int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const eventsTable = sqliteTable('event', {
    id: int().primaryKey({autoIncrement: true}),
    date: text().notNull(),
    name: text().notNull(),
    color: text({ enum: ['blue', 'green', 'red'] }).notNull(),
    isAllDay: int({ mode: 'boolean' }).notNull(),
    startTime: text(),
    endTime: text(),
}, (table) => [
    check('event_time_rules', sql`
        (
            ${table.isAllDay} = 1
            AND ${table.startTime} IS NULL
            AND ${table.endTime} IS NULL
        )
        OR
        (
            ${table.isAllDay} = 0
            AND ${table.startTime} IS NOT NULL
            AND ${table.endTime} IS NOT NULL
            AND ${table.startTime} <= ${table.endTime}
        )
    `)
]);