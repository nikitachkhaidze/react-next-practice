import { EventButtonProps } from "../model/calendarEvent";
import clsx from "clsx";

export default function TimedEvent({event: {color, time, name}, ...props}: Readonly<EventButtonProps>) {
    return <button className="flex w-full shrink-0 cursor-pointer items-center gap-2 overflow-hidden whitespace-nowrap border-none bg-none p-0 text-base" {...props}>
        <div className={clsx('h-2 w-2 shrink-0 rounded-full', {'bg-(--blue-background)': color === 'blue', 'bg-(--green-background)': color === 'green'})}></div>
        {time && <div className="text-(--muted-text-color)">{time.startTime.toLocaleTimeString()} {time.endTime.toLocaleTimeString()}</div>}
        <div>{name}</div>
    </button>
}