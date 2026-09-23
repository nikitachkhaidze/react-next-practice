import { CalendarEventColor } from "../../model/calendarEvent"
import clsx from "clsx";

type Props = {
    color: CalendarEventColor;
}

const colorLabelMap = new Map<CalendarEventColor, string>([
    ['blue', 'Blue'],
    ['red', 'Red'],
    ['green', 'Green'],
]);

export default function GCColorRadioButton({color}: Readonly<Props>) {
    return <>
        <input
            className={clsx(
                'absolute -left-[9999px] opacity-0', 
                {
                    'peer/blue': color === 'blue',
                    'peer/red': color === 'red',
                    'peer/green': color === 'green'
                }
            )}
            type="radio"
            name="color"
            value="blue"
            id="blue"
            defaultChecked
        />
        <label className={clsx(
            'block size-7 cursor-pointer rounded opacity-25 outline-offset-1',
                {
                    'bg-[hsl(200,80%,50%)] peer-checked/blue:opacity-100 peer-focus-visible/blue:outline peer-focus-visible/blue:outline-1 peer-focus-visible/blue:outline-black': color === 'blue',
                    'bg-[hsl(0,75%,60%)] peer-checked/red:opacity-100 peer-focus-visible/red:outline peer-focus-visible/red:outline-1 peer-focus-visible/red:outline-black': color === 'red',
                    'bg-[hsl(150,80%,30%)] peer-checked/green:opacity-100 peer-focus-visible/green:outline peer-focus-visible/green:outline-1 peer-focus-visible/green:outline-black': color === 'green'
                }
            )}
            htmlFor="blue">
            <span className="sr-only">{colorLabelMap.get(color)}</span>
        </label>
    </>
}