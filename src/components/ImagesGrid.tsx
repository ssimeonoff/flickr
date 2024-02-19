import Photo from "./Photo";
import Pagination from "./Pagination";

import { TilesContainer, ResultLabel } from "./styles";
import { useState } from "react";
import { GalleryType, PhotoType } from "../interfaces/interfaces";
import NewGallery from "./NewGallery";

interface Props {
  data: {
    photos: {
      page: number;
      pages: number;
      perpage: number;
      photo: {
        farm: number;
        id: string;
        isfamily: number;
        isfriend: number;
        ispublic: number;
        owner: string;
        secret: string;
        server: string;
        title: string;
      }[];
      total: number;
    };
  };
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
  const [selectedPhotos] = useState<PhotoType[]>([]);
  const [newGallery, setNewGallery] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  //adds or removes a photo from the selected array
  const toggleSelectedPhoto = (
    title: string,
    farm: number,
    id: string,
    secret: string,
    server: string
  ) => {
    // Find the index of the photo that needs to be removed
    const indexToRemove = selectedPhotos.findIndex(
      (photo) =>
        photo.title === title &&
        photo.farm === farm &&
        photo.id === id &&
        photo.secret === secret &&
        photo.server === server
    );
    // If the item is found, remove it from the array, else add it
    if (indexToRemove !== -1) {
      selectedPhotos.splice(indexToRemove, 1);
    } else selectedPhotos.push({ title, farm, id, secret, server });

    setSelectedCount(selectedPhotos.length);

    //toggle the new gallery creation
    selectedPhotos.length > 0 ? setNewGallery(true) : setNewGallery(false);
  };

  // checking if photo is selected (for the pagination rerendering)
  const isPhotoSelected = (
    title: string,
    farm: number,
    id: string,
    secret: string,
    server: string
  ) => {
    if (selectedPhotos.length === 0) return false;
    const index = selectedPhotos.findIndex(
      (photo) =>
        photo.title === title &&
        photo.farm === farm &&
        photo.id === id &&
        photo.secret === secret &&
        photo.server === server
    );
    if (index > -1) return true;
    return false;
  };

  //clear search results upon saving a gallery
  const saveGallery = (name: string) => {
    saveNewGallery({
      name: name,
      photos: selectedPhotos,
    });
    clearSearch();
  };

  return (
    <>
      <ResultLabel>{`results for "${searchedText}"`}</ResultLabel>

      <NewGallery
        active={newGallery}
        searchedText={searchedText}
        saveGallery={saveGallery}
        clearSearch={clearSearch}
        selectedCount={selectedCount}
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
