'use client';

import ActionButton from "@/components/ui/ActionButton";
import { geistMono, geistSans } from "./styles/fonts";
import NavLink from "@/components/ui/NavLink";

export default function GlobalError({ error, reset }: { error: Error & {digest?: string}; reset: () => void }) {
  return (
    <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
    <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-black">
        <div className="flex flex-col flex-1 px-20 py-10 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <nav className='px-50 mb-5 text-center'>
                <NavLink href="">Something Went Wrong!</NavLink>
            </nav>

            <main className="flex-1 w-full max-w-3xl p-16 bg-white dark:bg-black sm:items-start">
                <div className="flex items-center justify-center">
                    {error.digest && <p className="mb-8">{error.digest}</p>}

                    <ActionButton text="Try again" onClick={() => reset()} />
                </div>
            </main>
        </div>
    </body>
</html>
  );
};