'use client';

import { useEffect, useState } from "react"
import { getPhotos } from "./services/photoService";
import { Photo } from "@/model/photo";

export default function InfiniteScrollPage() {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        getPhotos().then((photos) => {
            setPhotos(photos.data);
            console.log(photos)
        });
    }, []);

    return <div></div>
}