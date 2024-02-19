// GalleriesContext.tsx
import React, { ReactNode, createContext, useContext } from "react";
import useGalleries from "../hooks/useGalleries";
import { GalleryType, GalleryTypeIndexed } from "../interfaces/interfaces";

interface GalleriesContextType {
  galleries: GalleryTypeIndexed[];
  deleteGallery: (id: number) => void;
  saveNewGallery: (gallery: GalleryType) => void;
}

// Create Context with an initial undefined value but assert the type
const GalleriesContext = createContext<GalleriesContextType | undefined>(
  undefined
);

interface GalleriesProviderProps {
  children: ReactNode;
}

// Provider Component
export const GalleriesProvider: React.FC<GalleriesProviderProps> = ({
  children,
}) => {
  const value = useGalleries();

  return (
    <GalleriesContext.Provider value={value}>
      {children}
    </GalleriesContext.Provider>
  );
};

// Custom hook to use the context
export const useGalleriesContext = () => {
  const context = useContext(GalleriesContext);
  if (context === undefined) {
    throw new Error(
      "useGalleriesContext must be used within a GalleriesProvider"
    );
  }
  return context;
};
