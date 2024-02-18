import Photo from "./Photo";
import Pagination from "./Pagination";

import { TilesContainer, ResultLabel } from "./styles";
import { useState } from "react";
import { PhotoType } from "../interfaces/interfaces";

interface Props {
  data: {
    photos: {
      page: number;
      pages: number;
      perpage: number;
      photo: {
        farm: number;
        id: string;
        isfamily: number;
        isfriend: number;
        ispublic: number;
        owner: string;
        secret: string;
        server: string;
        title: string;
      }[];
      total: number;
    };
  };
  searchedText: string;
  fetchPaginatedPhotos: (page: number) => void;
}

const ImagesGrid: React.FC<Props> = ({
  data,
  searchedText,
  fetchPaginatedPhotos,
}) => {
  const { photo, page, pages, perpage, total } = data.photos;

  const [selectedPhotos, setSeletedPhotos] = useState<PhotoType[]>([]);

  const toggleSelectedPhoto = (
    title: string,
    farm: number,
    id: string,
    secret: string,
    server: string
  ) => {
    // Find the index of the photo that needs to be removed
    const indexToRemove = selectedPhotos.findIndex(
      (photo) =>
        photo.title === title &&
        photo.farm === farm &&
        photo.id === id &&
        photo.secret === secret &&
        photo.server === server
    );
    // If the item is found, remove it from the array
    if (indexToRemove !== -1) {
      selectedPhotos.splice(indexToRemove, 1);
    } else selectedPhotos.push({ title, farm, id, secret, server });

    console.log(selectedPhotos);
  };

  // rendering the page of images (100)
  const renderTiles = () => {
    return photo.map((photo) => {
      return (
        <Photo
          key={photo.id}
          title={photo.title}
          farm={photo.farm}
          server={photo.server}
          id={photo.id}
          secret={photo.secret}
          thumbnail={true}
          toggleSelectedPhoto={toggleSelectedPhoto}
        />
      );
    });
  };

  return (
    <>
      <ResultLabel>{`results for "${searchedText}"`}</ResultLabel>
      <Pagination
        page={page}
        pages={pages}
        perpage={perpage}
        total={total}
        fetchPaginatedPhotos={fetchPaginatedPhotos}
      />
      <TilesContainer>{renderTiles()}</TilesContainer>
    </>
  );
};

export default ImagesGrid;
