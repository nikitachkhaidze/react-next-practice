import { format, getYear, subMonths } from "date-fns";
import ArrowButton from "./ui/ArrowButton";

type Props = {
    selectedDate: Date,
    onDateChange: (value: Date) => void;
}

export default function Header({selectedDate, onDateChange}: Props) {
    const currentMonth = format(selectedDate, 'MMMM');
    const currentYear = getYear(selectedDate);

    function onMonthChange(amount: number) {
        const newValue = subMonths(selectedDate, amount);
        
        onDateChange(newValue);
    }

    return <div className="flex w-full items-center gap-2 p-4">
        <button className="cursor-pointer rounded border border-(--border-color) bg-none px-4 py-2 text-base text-(--text-color) transition-colors duration-200 hover:bg-(--hover-background)">Today</button>
        <div>
        <ArrowButton direction="left" onClick={() => onMonthChange(1)}/>
        <ArrowButton direction="right" onClick={() => onMonthChange(-1)}/>
        </div>
        <span className="text-2xl font-bold">{currentMonth} {currentYear}</span>
    </div>
}