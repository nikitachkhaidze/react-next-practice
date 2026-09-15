import { Photo } from "@/model/photo"
import PhotoImage from "./PhotoImage"

type Props = {
    photos: Photo[],
}

export default function PhotoGrid({photos}: Readonly<Props>) {
    return photos.map(photo => (
                    <PhotoImage
                      key={photo.id}
                      src={photo.url}
                      alt={photo.title}
                      width={500}
                      height={500}
                      color={photo.color}
                    />
                  ));
}