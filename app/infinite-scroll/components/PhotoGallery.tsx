import { getPhotos } from "../services/photoService";
import InfiniteScrollContainer from "./InfiniteScrollContainer";
import PhotoImage from "./PhotoImage";

export default async function PhotoGallery() {
    const photos = await getPhotos();

    return <InfiniteScrollContainer>
        {photos.data.map(photo => (
                <PhotoImage
                  key={photo.id}
                  src={photo.url}
                  alt={photo.title}
                  width={500}
                  height={500}
                  color={photo.color}
                />
              ))}
      </InfiniteScrollContainer>
}