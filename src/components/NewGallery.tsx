import { ChangeEvent, FormEvent, useState } from "react";
import { CloseButton, SearchButton, SearchInput } from "./styles";
import { GalleryType, PhotoType } from "../interfaces/interfaces";

interface Props {
  active: boolean;
  searchedText: string;
  selectedCount: number;
  selectedPhotos: PhotoType[];
  clearSearch: () => void;
  saveNewGallery: (gallery: GalleryType) => void;
}

const NewGallery: React.FC<Props> = ({
  active,
  searchedText,
  selectedPhotos,
  saveNewGallery,
  clearSearch,
}) => {
  const [title, setTitle] = useState(searchedText);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveNewGallery({
      name: title,
      photos: selectedPhotos,
    });
    clearSearch();
  };

  return (
    <div style={{ position: "relative" }}>
      {active && (
        <form onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Title"
            required
          />

          <SearchButton type="submit">
            SAVE GALLERY / {selectedPhotos.length}
          </SearchButton>
          <CloseButton onClick={clearSearch}>
            <i className="fa-solid fa-xmark"></i>
          </CloseButton>
        </form>
      )}
    </div>
  );
};

export default NewGallery;
