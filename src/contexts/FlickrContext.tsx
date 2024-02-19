// FlickrContext.tsx
import React, { ReactNode, createContext, useContext } from "react";
import { DataType } from "../interfaces/interfaces";
import useFlickr from "../hooks/useFlickr";

interface FlickrContextType {
  data: DataType | null;
  error: string | null;
  searchedText: string;
  fetchPhotos: (text: string) => void;
  fetchPaginatedPhotos: (page: number) => void;
  clearSearch: () => void;
}

// Create Context with an initial undefined value but assert the type
const FlickrContext = createContext<FlickrContextType | undefined>(undefined);

interface FlickrProviderProps {
  children: ReactNode;
}

// Provider Component
export const FlickrProvider: React.FC<FlickrProviderProps> = ({ children }) => {
  const value = useFlickr();

  return (
    <FlickrContext.Provider value={value}>{children}</FlickrContext.Provider>
  );
};

// Custom hook to use the context
export const useFlickrContext = () => {
  const context = useContext(FlickrContext);
  if (context === undefined) {
    throw new Error("useFlickrContext must be used within a FlickrProvider");
  }
  return context;
};
