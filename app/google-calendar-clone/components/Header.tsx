export default function Header() {
    return <div className="flex w-full items-center gap-2 p-4">
        <button className="cursor-pointer rounded border border-(--border-color) bg-none px-4 py-2 text-base text-[#333] transition-colors duration-200 hover:bg-[#f1f3f4]">Today</button>
        <div>
        <button className="-mr-2 h-8 w-8 cursor-pointer rounded-full border-none bg-none p-0 text-center align-middle text-xl text-[#333] transition-colors duration-200 hover:bg-[#f1f3f4]">&lt;</button>
        <button className="h-8 w-8 cursor-pointer rounded-full border-none bg-none p-0 text-center align-middle text-xl text-[#333] transition-colors duration-200 hover:bg-[#f1f3f4]">&gt;</button>
        </div>
        <span className="text-2xl font-bold">June 2023</span>
    </div>
}