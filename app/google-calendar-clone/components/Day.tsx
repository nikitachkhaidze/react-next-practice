export default function Day() {
    return  <div className="group flex flex-col overflow-hidden bg-white p-(--day-padding) opacity-75">
        <div className="relative mb-1 flex flex-col items-center opacity-50">
            <div className="text-xs font-bold uppercase text-[#777]">Sun</div>
            <div className="flex h-6 w-6 items-center justify-center text-[0.9rem]">28</div>
            <button className="absolute right-0 top-0 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none bg-none text-xl text-[#333] opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-[#f1f3f4]">+</button>
        </div>
        <div className="flex grow flex-col gap-2 overflow-hidden opacity-50">
            <button className="flex w-full shrink-0 cursor-pointer items-center gap-2 overflow-hidden whitespace-nowrap rounded bg-(--blue-background) px-1 py-[0.15rem] text-base text-white">
            <div className="overflow-hidden">Short</div>
            </button>
            <button className="flex w-full shrink-0 cursor-pointer items-center gap-2 overflow-hidden whitespace-nowrap rounded bg-(--green-background) px-1 py-[0.15rem] text-base text-white">
            <div className="overflow-hidden">
                Long Event Name That Just Keeps Going
            </div>
            </button>
            <button className="flex w-full shrink-0 cursor-pointer items-center gap-2 overflow-hidden whitespace-nowrap border-none bg-none p-0 text-base">
            <div className="h-2 w-2 shrink-0 rounded-full bg-(--blue-background)"></div>
            <div className="text-[#777]">7am</div>
            <div>Event Name</div>
            </button>
        </div>
    </div>
}