import Pagination from "../components/Pagination";

import { TilesContainer, ResultLabel } from "../components/styles";
import NewGallery from "../components/NewGallery";
import useSelectedPhotos from "../hooks/useSelectedPhotos";
import { useFlickrContext } from "../contexts/FlickrContext";
import PhotosGrid from "../components/PhotosGrid";

const ImagesGrid: React.FC = () => {
  const { data, searchedText, fetchPaginatedPhotos, clearSearch } =
    useFlickrContext();

  const {
    selectedPhotos,
    newGallery,
    selectedCount,
    toggleSelectedPhoto,
    isPhotoSelected,
  } = useSelectedPhotos();

  if (data === null) return null;

  const { photo, page, pages, perpage, total } = data.photos;

  return (
    <>
      <ResultLabel>{`results for "${searchedText}"`}</ResultLabel>

      <NewGallery
        active={newGallery}
        searchedText={searchedText}
        clearSearch={clearSearch}
        selectedCount={selectedCount}
        selectedPhotos={selectedPhotos}
      />

      <Pagination
        page={page}
        pages={pages}
        perpage={perpage}
        total={total}
        fetchPaginatedPhotos={fetchPaginatedPhotos}
      />

      <PhotosGrid
        photos={photo}
        toggleSelectedPhoto={toggleSelectedPhoto}
        isPhotoSelected={isPhotoSelected}
      />
    </>
  );
};

export default ImagesGrid;
