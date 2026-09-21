'use client'

import { useState } from "react";
import DayGrid from "./DayGrid";
import Header from "./Header";
import { getDaysForCalendarPage } from "@/utils/calendarService";

export default function GoogleCalendarClone() {
    const [date, setDate] = useState(new Date());
    
    function onDateChange(value: Date) {
        setDate(value);
    }
    
    const days = getDaysForCalendarPage(date);
    
    return <main className="flex h-full flex-col text-(--text-color) [--blue-background:#1a73e8] [--border-color:#dadce0] [--border-size:1px] [--day-padding:0.25rem] [--green-background:#188038] [--hover-background:#f1f3f4] [--muted-text-color:#777] [--red-background:#d93025] [--surface-color:#fff] [--text-color:#333]">
        <Header selectedDate={date} onDateChange={onDateChange}/>
        <DayGrid days={days}/>
    </main>
}