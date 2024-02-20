import Pagination from "../components/Pagination";

import { ResultLabel } from "../components/styles";
import NewGallery from "../components/NewGallery";
import { useFlickr } from "../hooks/useFlickr";
import PhotosGrid from "./PhotosGrid";

const ImagesGrid: React.FC = () => {
  const { data, searchedText, fetchPaginatedPhotos } = useFlickr();

  if (data === null) return null;

  const { photo, page, pages, perpage, total } = data.photos;

  return (
    <>
      <ResultLabel>{`results for "${searchedText}"`}</ResultLabel>

      <NewGallery />

      <Pagination
        page={page}
        pages={pages}
        perpage={perpage}
        total={total}
        fetchPaginatedPhotos={fetchPaginatedPhotos}
      />

      <PhotosGrid photos={photo} />
    </>
  );
};

export default ImagesGrid;
