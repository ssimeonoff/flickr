import { ChangeEvent, FormEvent, useState } from "react";
import { ClearButton, SearchButton, SearchInput } from "./styles";
import { useGalleries } from "../hooks/useGalleries";
import { useSelectedPhotos } from "../hooks/useSelectedPhotos";
import { useFlickr } from "../hooks/useFlickr";

const NewGallery: React.FC = () => {
  const { saveNewGallery } = useGalleries();
  const { searchedText, clearSearch } = useFlickr();
  const { selectedPhotos, setSelectedPhotos } = useSelectedPhotos();

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
    setSelectedPhotos([]);
    clearSearch();
  };

  return (
    <div style={{ minHeight: "35px" }}>
      {selectedPhotos.length > 0 && (
        <form onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Gallery name"
            required
          />
          <SearchButton type="submit">SAVE</SearchButton>
          <ClearButton type="button" onClick={() => setSelectedPhotos([])}>
            <i className="fa-solid fa-xmark"></i> {selectedPhotos.length}
          </ClearButton>
        </form>
      )}
    </div>
  );
};

export default NewGallery;
