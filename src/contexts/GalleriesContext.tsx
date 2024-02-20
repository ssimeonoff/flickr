// GalleriesContext.tsx
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { GalleryType, GalleryTypeIndexed } from "../interfaces/interfaces";

const LOCAL_STORAGE_DATA_KEY = "galleries";

interface GalleriesContextType {
  galleries: GalleryTypeIndexed[];
  deleteGallery: (id: number) => void;
  saveNewGallery: (gallery: GalleryType) => void;
}

// Create Context with an initial undefined value but assert the type
export const GalleriesContext = createContext<GalleriesContextType | undefined>(
  undefined
);

interface GalleriesProviderProps {
  children: ReactNode;
}

// Provider Component
export const GalleriesProvider: React.FC<GalleriesProviderProps> = ({
  children,
}) => {
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
    const newGalleries = [...savedGalleries];
    newGalleries.push(newGallery);
    localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(newGalleries));
    setSavedGalleries(newGalleries);
  };

  // add index to the array
  const galleries = savedGalleries.map((item, index) => ({
    id: index,
    ...item,
  }));

  //delete a gallery
  const deleteGallery = (id: number) => {
    const currentGalleries = [...savedGalleries];
    const filteredGalleries = currentGalleries.filter(
      (item, index) => index !== id
    );
    localStorage.setItem(
      LOCAL_STORAGE_DATA_KEY,
      JSON.stringify(filteredGalleries)
    );
    setSavedGalleries(filteredGalleries);
  };

  return (
    <GalleriesContext.Provider
      value={{ saveNewGallery, deleteGallery, galleries }}
    >
      {children}
    </GalleriesContext.Provider>
  );
};
