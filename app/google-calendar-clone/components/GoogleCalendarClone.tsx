import DayGrid from "./DayGrid";
import Header from "./Header";
import '../styles/gc-clone.css';
import { Day } from "../model/day";

export type Props = {
    date: Date;
    days: Day[];
}

export default function GoogleCalendarClone({date, days}: Readonly<Props>) {
    return <main className="flex h-full flex-col text-(--gc-text-color)">
        <Header selectedDate={date}/>
        <DayGrid days={days}/>
    </main>
}