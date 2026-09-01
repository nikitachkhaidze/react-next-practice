'use client';

import { ComponentRef, ReactElement, useEffect, useRef } from "react"

type Props = {
    children: ReactElement[],
}

export default function InfiniteScrollContainer({children}: Readonly<Props>) {
    const rootRef = useRef<ComponentRef<"div">>(null);
    const sentinelRef = useRef<ComponentRef<"div">>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            console.log(entries);
        }, {root: rootRef.current, threshold: [0, 0.25, 0.5, 0.75, 1]});

        observer.observe(sentinelRef.current as HTMLDivElement)

        return () => observer.disconnect();
    }, [])

    return <div className="grid grid-cols-2 gap-2" ref={rootRef}>
        {children}
        <div className="col-span-2 h-1" ref={sentinelRef}></div>
    </div>
}