import axios from "axios";

export const getPhotos = async (text: string, page: number | undefined) => {
  const response = await axios.get(
    `${process.env.REACT_APP_URL}?method=flickr.photos.search`,
    {
      params: {
        api_key: process.env.REACT_APP_KEY,
        text,
        format: "json",
        nojsoncallback: 1,
        page,
      },
    }
  );
  return response;
};
