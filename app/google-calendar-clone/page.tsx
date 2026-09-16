import DayGrid from "./components/DayGrid";
import Header from "./components/Header";

export default function GoogleCalendarClonePage() {
    return <main className="flex h-full flex-col text-(--text-color) [--blue-background:#1a73e8] [--border-color:#dadce0] [--border-size:1px] [--day-padding:0.25rem] [--green-background:#188038] [--hover-background:#f1f3f4] [--muted-text-color:#777] [--red-background:#d93025] [--surface-color:#fff] [--text-color:#333]">
        <Header/>
        <DayGrid/>
    </main>
}