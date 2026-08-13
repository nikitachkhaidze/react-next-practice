'use client';

import DatePicker from './components/DatePicker';
import { useState } from 'react';

export default function DatePickerPage() {
  const [date, setDate] = useState(new Date());

  function onDateChange(value: Date) {
    setDate(value);
    console.log('Date changed to:', value);
  }

  return (
    <DatePicker value={date} onChange={onDateChange}></DatePicker>
  );
}