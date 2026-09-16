import ArrowButton from "./ArrowButton";

export default function Header() {
    return <div className="flex w-full items-center gap-2 p-4">
        <button className="cursor-pointer rounded border border-(--border-color) bg-none px-4 py-2 text-base text-(--text-color) transition-colors duration-200 hover:bg-(--hover-background)">Today</button>
        <div>
        <ArrowButton direction="left" />
        <ArrowButton direction="right" />
        </div>
        <span className="text-2xl font-bold">June 2023</span>
    </div>
}