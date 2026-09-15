import NavLink from "@/components/ui/NavLink";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export default function ModulesLayout({children}: Readonly<Props>) {
    return  <div className="flex flex-col flex-1 px-20 py-10 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <nav className="px-50 mb-5">
            <NavLink href="/">Home</NavLink>
        </nav>

        <main className="flex flex-col flex-1 w-full max-w-3xl p-16 bg-white dark:bg-black sm:items-start">
            {children}
        </main>
    </div>
}