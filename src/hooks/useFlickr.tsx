import { useContext } from "react";
import { FlickrContext } from "../contexts/FlickrContext";

// Custom hook to use the context
export const useFlickr = () => {
  const context = useContext(FlickrContext);
  if (context === undefined) {
    throw new Error("useFlickrContext must be used within a FlickrProvider");
  }
  return context;
};
