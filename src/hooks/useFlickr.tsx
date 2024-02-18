import { useState } from "react";
import { getPhotos } from "../api/apis";
import { DataType } from "../interfaces/interfaces";

const useFlickr = () => {
  const [data, setData] = useState<DataType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchedText, setSearchedText] = useState<string>("");

  const fetchPhotos = async (text: string, page?: number) => {
    try {
      const response = await getPhotos(text, page);
      setData(response.data);
      setSearchedText(text);
    } catch (error) {
      setError("Failed to fetch images.");
    }
  };

  const fetchPaginatedPhotos = (page: number) => {
    fetchPhotos(searchedText, page);
  };

  return { data, error, searchedText, fetchPhotos, fetchPaginatedPhotos };
};

export default useFlickr;
