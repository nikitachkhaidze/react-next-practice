'use client';

import DateButton from '@/app/date-picker/components/DateButton';
import MonthButton from '@/app/date-picker/components/MonthButton';
import ActionButton from '@/components/ui/ActionButton';
import { differenceInCalendarDays, endOfMonth, endOfWeek, format, getYear, isSameDay, isSameMonth, startOfMonth, startOfWeek, subMonths } from 'date-fns';
import { useEffect, useRef, useState } from 'react';

type Props = {
  value: Date;
  onChange: (value: Date) => void;
}

export default function DatePicker({value, onChange}: Readonly<Props>) {
  const [isOpen, setIsOpen] = useState(false);
  const [pageDate, setPageDate] = useState(value);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function documentClickListener(event: MouseEvent) {
      if (calendarRef.current?.contains(event.target as Node)) {
        return;
      }

      setIsOpen(false);
    }

    function documentEscapeListener(event: KeyboardEvent) {
      if (event.key !== 'Escape') {
        return;
      }

      setIsOpen(false);
    }

    document.body.addEventListener('click', documentClickListener);
    document.body.addEventListener('keydown', documentEscapeListener);

    return () => {
      document.body.removeEventListener('click', documentClickListener);
      document.body.removeEventListener('keydown', documentEscapeListener);
    }
  }, []);

  const startOfMonthDate = startOfMonth(pageDate);
  const endOfMonthDate = endOfMonth(pageDate);

  const startOfWeekDate = startOfWeek(startOfMonthDate);
  const endOfWeekDate = endOfWeek(endOfMonthDate);

  const daysCount = differenceInCalendarDays(endOfWeekDate, startOfWeekDate) + 1;

  const days = Array.from({ length: daysCount }, (_, index) => {
    const date = new Date(startOfWeekDate);
    date.setDate(startOfWeekDate.getDate() + index);
    return date;
  })

  const currentMonth = format(pageDate, 'MMMM');
  const currentYear = getYear(pageDate);

  const buttonText = format(value, 'MMM do, yyyy');

  const dateButtons = days.map((day) => {
    return <DateButton onClick={() => onChange(day)} isToday={isSameDay(value, day)} isOtherMonth={!isSameMonth(pageDate, day)} key={day.getTime()}>{day.getDate()}</DateButton>
  });

  function onButtonClicked() {
    setIsOpen(isOpen => !isOpen);
    setPageDate(value);
  }

  function onMonthChange(v: number) {
    const newValue = subMonths(pageDate, v);

    setPageDate(newValue);
  }

  return (
    <div className="relative inline-block" ref={calendarRef}>
      <ActionButton onClick={onButtonClicked} className='w-36'>
        {buttonText}
      </ActionButton>

      {isOpen && <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 rounded-lg bg-white p-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06),0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between text-[0.8rem] font-bold">
          <MonthButton onClick={() => onMonthChange(1)}>&larr;</MonthButton>
          <div>{currentMonth} - {currentYear}</div>
          <MonthButton onClick={() => onMonthChange(-1)}>&rarr;</MonthButton>
        </div>

        <div className="grid grid-cols-[repeat(7,2rem)] auto-rows-[2rem] gap-2 text-[0.75rem] font-bold text-[#333] *:flex *:h-full *:w-full *:items-center *:justify-center">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="grid grid-cols-[repeat(7,2rem)] auto-rows-[2rem] gap-2 text-[#555]">
          {dateButtons}
        </div>
      </div>}
    </div>
  );
}