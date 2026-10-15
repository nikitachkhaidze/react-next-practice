'use client'

import { useState } from "react";
import DayGrid from "./DayGrid";
import Header from "./Header";
import '../styles/gc-clone.css';
import { Day } from "../model/day";

export type Props = {
    days: Day[];
}

export default function GoogleCalendarClone({days}: Readonly<Props>) {
    const [date, setDate] = useState(new Date());

    function onDateChange(value: Date) {
        setDate(value);
    }
    
    return <main className="flex h-full flex-col text-(--gc-text-color)">
        <Header selectedDate={date} onDateChange={onDateChange}/>
        <DayGrid days={days}/>
    </main>
}