import { getPhotos } from "../services/photoService";

export default async function PhotoGallery() {
    const photos = await getPhotos();

    return photos.data.map(photo => <div key={photo.id}>{photo.id}</div>);
}