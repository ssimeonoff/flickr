import { useCallback } from "react";
import { PhotoType } from "../interfaces/interfaces";
import { useSelectedPhotos } from "./useSelectedPhotos";

export const usePhotosGrid = () => {
  const { selectedPhotos, setSelectedPhotos } = useSelectedPhotos();

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

  // useCallback() to prevents the other N-1 photos to rerender
  // the child is wrapped in memo()
  const toggleSelectedPhoto = useCallback((photo: PhotoType) => {
    setSelectedPhotos((selectedPhotos: PhotoType[]) => {
      const newState = [...selectedPhotos];

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

      if (indexToRemove !== -1) {
        // If the item is found, remove it from the array
        newState.splice(indexToRemove, 1);
      } else {
        // Else, add it to the array
        newState.push({ title, farm, id, secret, server });
      }

      return newState;
    });
  }, []);

  return {
    isPhotoSelected,
    toggleSelectedPhoto,
  };
};
