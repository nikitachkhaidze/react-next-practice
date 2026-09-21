import { CalendarEvent } from "../model/calendarEvent";
import { DayGridProps } from "../model/day";
import Day from "./Day";

export default function DayGrid({days}: DayGridProps) {
    return <div className="grid grow auto-rows-[minmax(100px,1fr)] grid-cols-7 gap-(--border-size) overflow-y-auto bg-(--border-color) p-(--border-size)">
        {days.map((day, key) => <Day key={key} {...day}/>)}
    </div>
}