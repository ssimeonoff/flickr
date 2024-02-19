import { useEffect, useState } from "react";
import { GalleryType } from "../interfaces/interfaces";

const LOCAL_STORAGE_DATA_KEY = "galleries";

const useGalleries = () => {
  const [savedGalleries, setSavedGalleries] = useState<GalleryType[]>([]);

  //get saved galleries from local storage
  const getLocalStorageData = () => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_DATA_KEY);
    if (savedData) {
      setSavedGalleries(JSON.parse(savedData));
    }
  };

  // load data from localStorage on component mount
  useEffect(() => {
    getLocalStorageData();
  }, []);

  //save a new gallery
  const saveNewGallery = (newGallery: GalleryType) => {
    savedGalleries.push(newGallery);
    localStorage.setItem(
      LOCAL_STORAGE_DATA_KEY,
      JSON.stringify(savedGalleries)
    );
    getLocalStorageData();
  };

  //delete a gallery
  const deleteGallery = (id: number) => {
    localStorage.setItem(
      LOCAL_STORAGE_DATA_KEY,
      JSON.stringify(savedGalleries.filter((item, index) => index !== id))
    );
    getLocalStorageData();
  };

  // add index to the array
  const galleries = savedGalleries.map((item, index) => ({
    id: index,
    ...item,
  }));

  return { galleries, saveNewGallery, deleteGallery };
};

export default useGalleries;
