import InfiniteScrollContainer from "./InfiniteScrollContainer";
import { getPhotos } from "../../api/photos/lib/services/photoService";

export default async function PhotoGallery() {
    const photos = await getPhotos();

    return <InfiniteScrollContainer initialPhotos={photos}></InfiniteScrollContainer>
}