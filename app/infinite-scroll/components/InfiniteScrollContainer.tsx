'use client';

import { ComponentRef, RefObject, useEffect, useRef, useState } from "react"
import { getPhotos } from "../services/photoApiService";
import { Photo } from "@/model/photo";
import PhotoGrid from "./PhotoGrid";
import { PaginatedResult } from "../model/photo";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

type Props = {
    initialPhotos: PaginatedResult<Photo>,
}

export default function InfiniteScrollContainer({initialPhotos}: Readonly<Props>) {
    const [photos, setPhotos] = useState([...initialPhotos.data]);
    const sentinelRef = useRef<ComponentRef<"div">>(null);
    const [hasMore, setHasMore] = useState(initialPhotos.total > initialPhotos.data.length);

    const loadedPhotosLegthRef = useRef(initialPhotos.data.length);
    const pageRef = useRef(1);

    useInfiniteScroll(async () => {
        pageRef.current++;

        const newPhotos = await getPhotos({page: pageRef.current});

        setPhotos((current) => [...current, ...newPhotos.data]);
        setHasMore(newPhotos.total > loadedPhotosLegthRef.current + newPhotos.data.length);

        loadedPhotosLegthRef.current += newPhotos.data.length;
    }, sentinelRef as RefObject<HTMLElement>, hasMore);

    return <div className="grid grid-cols-2 gap-2">
        <PhotoGrid photos={photos}></PhotoGrid>
        <div className="col-span-2 h-1" ref={sentinelRef}></div>
    </div>
}