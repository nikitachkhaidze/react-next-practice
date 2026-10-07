import { DayGridProps } from "../model/day";
import CalendarDay from "./CalendarDay";

export default function DayGrid({days}: DayGridProps) {
    return <div className="grid grow auto-rows-[minmax(100px,1fr)] grid-cols-7 gap-(--gc-border-size) overflow-y-auto bg-(--gc-border-color) p-(--gc-border-size)">
        {days.map((day, key) => <CalendarDay key={key} {...day}/>)}
    </div>
}