import Event from './Event';
import { CalendarEvent } from "../model/calendarEvent";

export default function Day() {
    const events: CalendarEvent[] = [
        {
            name: 'Shit Event',
            color: 'green'
        },
        {
            name: 'Shit Event',
            color: 'blue',
            time: {
                startTime: new Date(),
                endTime: new Date(),
            }
        },
    ]

    return  <div className="group flex flex-col overflow-hidden bg-(--surface-color) p-(--day-padding) opacity-75">
        <div className="relative mb-1 flex flex-col items-center opacity-50">
            <div className="text-xs font-bold uppercase text-(--muted-text-color)">Sun</div>
            <div className="flex h-6 w-6 items-center justify-center text-[0.9rem]">28</div>
            <button className="absolute right-0 top-0 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none bg-none text-xl text-(--text-color) opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-(--hover-background)">+</button>
        </div>
        <div className="flex grow flex-col gap-2 overflow-hidden opacity-50">
            <button className="flex w-full shrink-0 cursor-pointer items-center gap-2 overflow-hidden whitespace-nowrap rounded bg-(--green-background) px-1 py-[0.15rem] text-base text-(--surface-color)">
                <div className="overflow-hidden">
                    Long Event Name That Just Keeps Going
                </div>
            </button>
            <button className="flex w-full shrink-0 cursor-pointer items-center gap-2 overflow-hidden whitespace-nowrap border-none bg-none p-0 text-base">
                <div className="h-2 w-2 shrink-0 rounded-full bg-(--blue-background)"></div>
                <div className="text-(--muted-text-color)">7am</div>
                <div>Event Name</div>
            </button>

            {events.map((event, index) => <Event key={index} event={event}></Event>)}
        </div>
    </div>
}