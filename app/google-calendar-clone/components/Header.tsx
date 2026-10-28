'use client';

import { format, getYear, subMonths } from "date-fns";
import { useRouter } from "next/navigation";
import ArrowButton from "./ui/ArrowButton";
import { getDateKey } from "../utils/getDateKey";
import ActionButton from "./ui/ActionButton";

type Props = {
    selectedDate: Date,
}

export default function Header({selectedDate}: Props) {
    const router = useRouter();
    const currentMonth = format(selectedDate, 'MMMM');
    const currentYear = getYear(selectedDate);

    function onMonthChange(amount: number) {
        const newValue = subMonths(selectedDate, amount);
        
        navigateToDate(newValue);
    }

    function navigateToDate(date: Date) {
        router.push(`/google-calendar-clone?date=${getDateKey(date)}`);
    }

    return <div className="flex w-full items-center gap-2 p-4">
        <ActionButton color="white" label="Today" className="grow-0" onClick={() => navigateToDate(new Date())}></ActionButton>
        <div>
        <ArrowButton direction="left" onClick={() => onMonthChange(1)}/>
        <ArrowButton direction="right" onClick={() => onMonthChange(-1)}/>
        </div>
        <span className="text-2xl font-bold">{currentMonth} {currentYear}</span>
    </div>
}