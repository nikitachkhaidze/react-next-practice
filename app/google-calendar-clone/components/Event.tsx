export default function Event() {
    return <button className="flex w-full shrink-0 cursor-pointer items-center gap-2 overflow-hidden whitespace-nowrap border-none bg-none p-0 text-base">
        <div className="h-2 w-2 shrink-0 rounded-full bg-(--blue-background)"></div>
        <div className="text-[#777]">7am</div>
        <div>Event Name</div>
    </button>
}