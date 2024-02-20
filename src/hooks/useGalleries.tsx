import { useContext } from "react";
import { GalleriesContext } from "../contexts/GalleriesContext";

// Custom hook to use the context
export const useGalleries = () => {
  const context = useContext(GalleriesContext);
  if (context === undefined) {
    throw new Error(
      "useGalleriesContext must be used within a GalleriesProvider"
    );
  }
  return context;
};
