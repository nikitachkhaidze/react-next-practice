import { EventButtonProps } from "../model/calendarEvent";
import clsx from "clsx";

export default function AllDayEvent({event: {name, color}, ...props}: Readonly<EventButtonProps>) {
    const buttonClassName = clsx(
        'flex w-full shrink-0 cursor-pointer items-center gap-2 overflow-hidden whitespace-nowrap rounded px-1 py-[0.15rem] text-base text-(--surface-color)', 
        {'bg-(--blue-background)': color === 'blue', 'bg-(--green-background)': color === 'green'},
    );

    return <button className={buttonClassName} {...props}>
        <div>{name}</div>
    </button>
}