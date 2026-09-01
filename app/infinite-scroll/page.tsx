import { Suspense } from "react"
import Spinner from "@/components/ui/Spinner";
import PhotoGallery from "./components/PhotoGallery";

export default function InfiniteScrollPage() {
    return <Suspense fallback={<Spinner/>}>
            <PhotoGallery></PhotoGallery>
        </Suspense>
};