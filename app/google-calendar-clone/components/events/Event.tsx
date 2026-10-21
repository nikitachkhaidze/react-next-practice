import { EventButtonProps } from "../../model/calendarEvent";
import AllDayEvent from "./AllDayEvent";
import TimedEvent from "./TimedEvent";

export default function Event(props: Readonly<EventButtonProps>) {
    return props.event.isAllDay ? <AllDayEvent {...props}></AllDayEvent> : <TimedEvent {...props}></TimedEvent>;
}