'use client';

import { ComponentRef, useEffect, useRef, useState } from "react"
import { getPhotos } from "../services/photoApiService";
import { Photo } from "@/model/photo";
import PhotoGrid from "./PhotoGrid";
import { PaginatedResult } from "../model/photo";

type Props = {
    initialPhotos: PaginatedResult<Photo>,
}

export default function InfiniteScrollContainer({initialPhotos}: Readonly<Props>) {
    const [photos, setPhotos] = useState([...initialPhotos.data]);
    const sentinelRef = useRef<ComponentRef<"div">>(null);
    const [hasMore, setHasMore] = useState(initialPhotos.total > initialPhotos.data.length);

    const loadedPhotosLegthRef = useRef(initialPhotos.data.length);
    const pageRef = useRef(1);

    useEffect(() => {
        const observer = new IntersectionObserver(async (entries) => {
            if (entries[0].target === sentinelRef.current && entries[0].isIntersecting) {
                pageRef.current++;

                const newPhotos = await getPhotos({page: pageRef.current});

                setPhotos((current) => [...current, ...newPhotos.data]);
                setHasMore(newPhotos.total > loadedPhotosLegthRef.current + newPhotos.data.length);

                loadedPhotosLegthRef.current += newPhotos.data.length;
            }
        }, {rootMargin: '300px'});

        if (hasMore) {
            observer.observe(sentinelRef.current as HTMLDivElement)
        } else {
            observer.disconnect();
        }

        return () => observer.disconnect();
    }, [hasMore])

    return <div className="grid grid-cols-2 gap-2">
        <PhotoGrid photos={photos}></PhotoGrid>
        <div className="col-span-2 h-1" ref={sentinelRef}></div>
    </div>
}