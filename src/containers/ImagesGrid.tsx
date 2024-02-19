import Photo from "../components/Photo";
import Pagination from "../components/Pagination";

import { TilesContainer, ResultLabel } from "../components/styles";
import { DataType, GalleryType } from "../interfaces/interfaces";
import NewGallery from "../components/NewGallery";
import useSelectedPhotos from "../hooks/useSelectedPhotos";

interface Props {
  data: DataType;
  searchedText: string;
  fetchPaginatedPhotos: (page: number) => void;
  clearSearch: () => void;
  saveNewGallery: (gallery: GalleryType) => void;
}

const ImagesGrid: React.FC<Props> = ({
  data,
  searchedText,
  fetchPaginatedPhotos,
  clearSearch,
  saveNewGallery,
}) => {
  const { photo, page, pages, perpage, total } = data.photos;

  const {
    selectedPhotos,
    newGallery,
    selectedCount,
    toggleSelectedPhoto,
    isPhotoSelected,
  } = useSelectedPhotos();

  return (
    <>
      <ResultLabel>{`results for "${searchedText}"`}</ResultLabel>

      <NewGallery
        active={newGallery}
        searchedText={searchedText}
        saveNewGallery={saveNewGallery}
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

      <TilesContainer>
        {photo.map((photo) => {
          return (
            <Photo
              key={photo.id}
              title={photo.title}
              farm={photo.farm}
              server={photo.server}
              id={photo.id}
              secret={photo.secret}
              thumbnail={true}
              toggleSelectedPhoto={toggleSelectedPhoto}
              selected={isPhotoSelected(
                photo.title,
                photo.farm,
                photo.id,
                photo.secret,
                photo.server
              )}
            />
          );
        })}
      </TilesContainer>
    </>
  );
};

export default ImagesGrid;
