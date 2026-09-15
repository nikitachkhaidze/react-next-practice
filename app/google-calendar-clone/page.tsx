import DayGrid from "./components/DayGrid";
import Header from "./components/Header";

export default function GoogleCalendarClonePage() {
    return <main className="flex h-full flex-col text-[#333] [--blue-background:#1a73e8] [--border-color:#dadce0] [--border-size:1px] [--day-padding:0.25rem] [--green-background:#188038] [--red-background:#d93025]">
        <Header/>
        <DayGrid/>
    </main>
}