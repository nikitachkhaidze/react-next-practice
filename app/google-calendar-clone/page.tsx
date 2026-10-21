import { redirect } from "next/navigation";
import GoogleCalendarClone from "./components/GoogleCalendarClone";
import { SearchParams } from "./model/searchParams";
import { getCalendarDaysByDate } from "./server/calendarService";
import { getDateKey } from "./utils/getDateKey";

type Props = {
    searchParams: Promise<SearchParams>;
}

export default async function GoogleCalendarClonePage({searchParams}: Readonly<Props>) {
    const {date} = await searchParams;

    if (!date) {
        redirect(`/google-calendar-clone?date=${getDateKey(new Date())}`);
    }

    const days = await getCalendarDaysByDate(date);

    return <GoogleCalendarClone days={days}></GoogleCalendarClone>
}