import { getPhotos } from "@/app/(modules)/photos/lib/services/photoService";
import InfiniteScrollContainer from "./InfiniteScrollContainer";

export default async function PhotoGallery() {
    const photos = await getPhotos();

    return <InfiniteScrollContainer initialPhotos={photos}></InfiniteScrollContainer>
}