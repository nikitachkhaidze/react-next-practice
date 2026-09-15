import Day from "./Day";

export default function DayGrid() {
    return <div className="grid grow auto-rows-[minmax(100px,1fr)] grid-cols-7 gap-(--border-size) overflow-y-auto bg-(--border-color) p-(--border-size)">
        <Day/>
    </div>
}