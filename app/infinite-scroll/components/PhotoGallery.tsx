import { getPhotos } from "../services/photoService";
import PhotoImage from "./PhotoImage";

export default async function PhotoGallery() {
    const photos = await getPhotos();

    return <div className="grid grid-cols-2 gap-2">
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
    </div>;
}