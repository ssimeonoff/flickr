import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_URL;

export const getPhotos = async (text: string, page: number | undefined) => {
  const response = await axios.get("?method=flickr.photos.search", {
    params: {
      api_key: process.env.REACT_APP_KEY,
      text,
      page,
      per_page: 50,
      format: "json",
      nojsoncallback: 1,
    },
  });
  return response;
};
