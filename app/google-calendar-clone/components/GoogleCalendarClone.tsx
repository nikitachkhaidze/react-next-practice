'use client'

import { useState } from "react";
import DayGrid from "./DayGrid";
import Header from "./Header";
import { getDaysForCalendarPage } from "@/utils/calendarService";
import '../styles/gc-clone.css';

export default function GoogleCalendarClone() {
    const [date, setDate] = useState(new Date());
    
    function onDateChange(value: Date) {
        setDate(value);
    }
    
    const days = getDaysForCalendarPage(date);
    
    return <main className="flex h-full flex-col text-(--gc-text-color)">
        <Header selectedDate={date} onDateChange={onDateChange}/>
        <DayGrid days={days}/>
    </main>
}