import { useState } from "react";
import {
  GalleriesContainer,
  GalleryLabel,
  CloseButton,
  SelectedGalleryContainer,
  ResultLabel,
} from "./styles";
import useGalleries from "../hooks/useGalleries";
import Pagination from "./Pagination";
import Photo from "./Photo";

interface Props {}

const Galleries: React.FC<Props> = ({}) => {
  const { galleries } = useGalleries();
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);

  //using the same named callback function to reuse the Pagination component
  const fetchPaginatedPhotos = (page: number) => {
    setPage(page);
  };

  return (
    <GalleriesContainer>
      <ResultLabel>Galleries</ResultLabel>
      <div>
        {galleries.map((gallery) => {
          return (
            <GalleryLabel
              key={gallery.id}
              onClick={() => {
                setSelectedGallery(gallery.id);
                setPage(1);
              }}
            >
              {gallery.name}
            </GalleryLabel>
          );
        })}
      </div>
      {selectedGallery !== null && (
        <SelectedGalleryContainer>
          <div>
            <ResultLabel>{galleries[selectedGallery].name}</ResultLabel>
            <CloseButton onClick={() => setSelectedGallery(null)}>
              <i className="fa-solid fa-xmark"></i>
            </CloseButton>
          </div>

          <Pagination
            page={page}
            perpage={1}
            total={galleries[selectedGallery].photos.length}
            pages={galleries[selectedGallery].photos.length}
            fetchPaginatedPhotos={fetchPaginatedPhotos}
          />
          <Photo
            title={galleries[selectedGallery].photos[page - 1].title}
            farm={galleries[selectedGallery].photos[page - 1].farm}
            server={galleries[selectedGallery].photos[page - 1].server}
            id={galleries[selectedGallery].photos[page - 1].id}
            secret={galleries[selectedGallery].photos[page - 1].secret}
          />
        </SelectedGalleryContainer>
      )}
    </GalleriesContainer>
  );
};

export default Galleries;
