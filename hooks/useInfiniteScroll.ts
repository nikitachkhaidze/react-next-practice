import { RefObject, useEffect } from "react";

export default function useInfiniteScroll(callback: () => Promise<void>, sentinelRef: RefObject<HTMLElement>, hasMore: boolean) {
    useEffect(() => {
        const observer = new IntersectionObserver(async (entries) => {
            if (entries[0].target === sentinelRef.current && entries[0].isIntersecting) {
                await callback();
            }
        }, {rootMargin: '300px'});

        if (hasMore) {
            observer.observe(sentinelRef.current as HTMLElement)
        } else {
            observer.disconnect();
        }

        return () => observer.disconnect();
    }, [sentinelRef, callback, hasMore])
}