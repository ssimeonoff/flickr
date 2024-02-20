// FlickrContext.tsx
import React, { ReactNode, createContext, useState } from "react";
import { DataType } from "../interfaces/interfaces";
import { getPhotos } from "../api/apis";

interface FlickrContextType {
  data: DataType | null;
  error: string | null;
  searchedText: string;
  fetchPhotos: (text: string) => void;
  fetchPaginatedPhotos: (page: number) => void;
  clearSearch: () => void;
}

// Create Context with an initial undefined value but assert the type
export const FlickrContext = createContext<FlickrContextType | undefined>(
  undefined
);

interface FlickrProviderProps {
  children: ReactNode;
}

// Provider Component
export const FlickrProvider: React.FC<FlickrProviderProps> = ({ children }) => {
  const [data, setData] = useState<DataType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchedText, setSearchedText] = useState<string>("");

  //fetching photos
  const fetchPhotos = async (text: string, page?: number) => {
    try {
      const response = await getPhotos(text, page);
      setData(response.data);
      setSearchedText(text);
    } catch (error) {
      setError("Failed to fetch images.");
    }
  };

  //fetching photos by providing a page number
  const fetchPaginatedPhotos = (page: number) => {
    fetchPhotos(searchedText, page);
  };

  // clearing the search
  const clearSearch = () => {
    setData(null);
    setSearchedText("");
  };

  return (
    <FlickrContext.Provider
      value={{
        data,
        error,
        searchedText,
        fetchPhotos,
        fetchPaginatedPhotos,
        clearSearch,
      }}
    >
      {children}
    </FlickrContext.Provider>
  );
};
