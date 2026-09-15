import { isSameDay, isSameMonth } from 'date-fns';
import DateButton from './DateButton';

type Props = {
  days: Date[];
  value: Date;
  pageDate: Date;
  onChange: (value: Date) => void;
};

export default function DateGrid({
  days,
  value,
  pageDate,
  onChange,
}: Readonly<Props>) {
  return (
    <>
      {days.map((day) => (
        <DateButton
          onClick={() => onChange(day)}
          isToday={isSameDay(value, day)}
          isOtherMonth={!isSameMonth(pageDate, day)}
          key={day.getTime()}
        >
          {day.getDate()}
        </DateButton>
      ))}
    </>
  );
}
