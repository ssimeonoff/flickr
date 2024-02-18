import { useEffect, useState } from "react";
import { GalleryType } from "../interfaces/interfaces";

const LOCAL_STORAGE_DATA_KEY = "galleries";

const useGalleries = () => {
  const [savedGalleries, setSavedGalleries] = useState<GalleryType[]>([]);

  const getLocalStorageData = () => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_DATA_KEY);
    if (savedData) {
      setSavedGalleries(JSON.parse(savedData));
    }
  };

  // useEffect to load data from localStorage on component mount
  useEffect(() => {
    getLocalStorageData();
  }, []);

  // add index to the array
  const galleries = savedGalleries.map((item, index) => ({
    id: index,
    ...item,
  }));

  return { galleries };
};

export default useGalleries;

/*   const gal = [
    {
      name: "gal1",
      photos: [
        {
          title: "Cake by Colorful Sweets & Dog Treats",
          farm: 66,
          id: "53534630584",
          secret: "2a533788cb",
          server: "65535",
        },
        {
          title: "Cake by Colorful Sweets & Dog Treats",
          farm: 66,
          id: "53534630584",
          secret: "2a533788cb",
          server: "65535",
        },
      ],
    },
    {
      name: "gal2",
      photos: [
        {
          title: "Cake by Colorful Sweets & Dog Treats",
          farm: 66,
          id: "53534630584",
          secret: "2a533788cb",
          server: "65535",
        },
        {
          title: "Cake by Colorful Sweets & Dog Treats",
          farm: 66,
          id: "53534630584",
          secret: "2a533788cb",
          server: "65535",
        },
        {
          title: "Cake by Colorful Sweets & Dog Treats",
          farm: 66,
          id: "53534630584",
          secret: "2a533788cb",
          server: "65535",
        },
      ],
    },
  ]; */

// localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(gal));
