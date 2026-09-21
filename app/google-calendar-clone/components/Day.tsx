import Event from './Event';
import { Day as CalendarDay } from '../model/day';
import { format } from 'date-fns';

export default function Day({date, events}: Readonly<CalendarDay>) {
    return  <div className="group flex flex-col overflow-hidden bg-(--surface-color) p-(--day-padding) opacity-75">
        <div className="relative mb-1 flex flex-col items-center opacity-50">
            <div className="text-xs font-bold uppercase text-(--muted-text-color)">{format(date, 'iii')}</div>
            <div className="flex h-6 w-6 items-center justify-center text-[0.9rem]">{format(date, 'd')}</div>
            <button className="absolute right-0 top-0 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none bg-none text-xl text-(--text-color) opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-(--hover-background)">+</button>
        </div>
        <div className="flex grow flex-col gap-2 overflow-hidden opacity-50">
            {events.map((event, index) => <Event key={index} event={event}></Event>)}
        </div>
    </div>
}