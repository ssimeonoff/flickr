import { useEffect, useState } from "react";
import {
  SelectedGalleryContainer,
  ResultLabel,
  DeleteButton,
  CloseButton,
} from "./styles";
import Pagination from "./Pagination";
import Photo from "./Photo";
import { GalleryTypeIndexed } from "../interfaces/interfaces";

interface Props {
  gallery: GalleryTypeIndexed;
  deleteGallery: (id: number) => void;
  setSelectedGallery: (page: number | null) => void;
}

const GalleryView: React.FC<Props> = ({
  gallery,
  deleteGallery,
  setSelectedGallery,
}) => {
  const [page, setPage] = useState<number>(1); //first page

  //reset the page when a new gallery is opened
  useEffect(() => {
    setPage(1);
  }, [gallery.id]);

  //open confirmation dialog upon deletion
  const confirmDelete = (selectedGallery: number) => {
    const isConfirmed: boolean = window.confirm(
      "Are you sure you want to delete the gallery?"
    );
    if (isConfirmed) {
      deleteGallery(gallery.id);
      setSelectedGallery(null);
    }
  };

  const setGalleryPage = (page: number) => {
    setPage(page);
  };

  return (
    <SelectedGalleryContainer>
      <ResultLabel>{gallery.name}</ResultLabel>

      <DeleteButton
        onClick={() => {
          confirmDelete(gallery.id);
        }}
      >
        <i className="fa-solid fa-trash"></i>
      </DeleteButton>

      <CloseButton onClick={() => setSelectedGallery(null)}>
        <i className="fa-solid fa-xmark"></i>
      </CloseButton>

      <Pagination
        page={page}
        perpage={1}
        total={gallery.photos.length}
        pages={gallery.photos.length}
        fetchPaginatedPhotos={setGalleryPage}
      />

      {page <= gallery.photos.length && (
        <Photo
          title={gallery.photos[page - 1].title}
          farm={gallery.photos[page - 1].farm}
          server={gallery.photos[page - 1].server}
          id={gallery.photos[page - 1].id}
          secret={gallery.photos[page - 1].secret}
        />
      )}
    </SelectedGalleryContainer>
  );
};

export default GalleryView;
