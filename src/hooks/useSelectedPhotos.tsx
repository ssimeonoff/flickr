import { useState } from "react";
import { PhotoType } from "../interfaces/interfaces";

const useSelectedPhotos = () => {
  const [selectedPhotos] = useState<PhotoType[]>([]);
  const [newGallery, setNewGallery] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  //adds or removes a photo from the selected array
  const toggleSelectedPhoto = (photo: PhotoType) => {
    const { title, farm, id, secret, server } = photo;
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
  const isPhotoSelected = (photo: PhotoType) => {
    const { title, farm, id, secret, server } = photo;
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

  return {
    toggleSelectedPhoto,
    isPhotoSelected,
    selectedPhotos,
    newGallery,
    selectedCount,
  };
};

export default useSelectedPhotos;
