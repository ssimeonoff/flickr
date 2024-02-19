import { useState } from "react";
import {
  GalleriesContainer,
  GalleryLabel,
  CloseButton,
  SelectedGalleryContainer,
  ResultLabel,
  GalleryLabelContainer,
  DeleteButton,
} from "./styles";
import Pagination from "./Pagination";
import Photo from "./Photo";
import { GalleryTypeIndexed } from "../interfaces/interfaces";

interface Props {
  galleries: GalleryTypeIndexed[];
  deleteGallery: (id: number) => void;
}

const Galleries: React.FC<Props> = ({ galleries, deleteGallery }) => {
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1); //first page

  const setGalleryPage = (page: number) => {
    setPage(page);
  };

  //open confirmation dialog upon deletion
  const confirmDelete = (selectedGallery: number) => {
    const isConfirmed: boolean = window.confirm(
      "Are you sure you want to delete the gallery?"
    );
    if (isConfirmed) {
      deleteGallery(selectedGallery);
      setSelectedGallery(null);
    }
  };

  return (
    <GalleriesContainer>
      <ResultLabel>Galleries</ResultLabel>
      <GalleryLabelContainer>
        {galleries.map((gallery) => {
          return (
            <GalleryLabel
              key={gallery.id}
              $selected={selectedGallery === gallery.id}
              onClick={() => {
                setSelectedGallery(gallery.id);
                setPage(1);
              }}
            >
              {gallery.name}
            </GalleryLabel>
          );
        })}
      </GalleryLabelContainer>
      {selectedGallery !== null && (
        <SelectedGalleryContainer>
          <div>
            <ResultLabel>{galleries[selectedGallery].name}</ResultLabel>
            <DeleteButton
              onClick={() => {
                confirmDelete(selectedGallery);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </DeleteButton>
            <CloseButton onClick={() => setSelectedGallery(null)}>
              <i className="fa-solid fa-xmark"></i>
            </CloseButton>
          </div>

          <Pagination
            page={page}
            perpage={1}
            total={galleries[selectedGallery].photos.length}
            pages={galleries[selectedGallery].photos.length}
            fetchPaginatedPhotos={setGalleryPage}
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
