import { useContext } from "react";
import { SelectedPhotosContext } from "../contexts/SelectedPhotosContext";

// Custom hook to use the context
export const useSelectedPhotos = () => {
  const context = useContext(SelectedPhotosContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedPhotosContext must be used within a SelectedPhotosProvider"
    );
  }
  return context;
};
