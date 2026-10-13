'use client'

import { useEffect, useState } from "react";
import DayGrid from "./DayGrid";
import Header from "./Header";
import '../styles/gc-clone.css';
import { get } from "@/utils/httpService";

export default function GoogleCalendarClone() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        get('google-calendar-clone/api').then(console.log);
    }, []);
    
    function onDateChange(value: Date) {
        setDate(value);
    }
    
    const days = [{
        date: new Date(),
        events: [],
    }];
    
    return <main className="flex h-full flex-col text-(--gc-text-color)">
        <Header selectedDate={date} onDateChange={onDateChange}/>
        <DayGrid days={days}/>
    </main>
}