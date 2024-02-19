import { ChangeEvent, FormEvent, useState } from "react";
import { CloseButton, SearchButton, SearchInput } from "./styles";

interface Props {
  active: boolean;
  searchedText: string;
  selectedCount: number;
  saveGallery: (title: string) => void;
  clearSearch: () => void;
}

const NewGallery: React.FC<Props> = ({
  active,
  searchedText,
  selectedCount,
  saveGallery,
  clearSearch,
}) => {
  const [title, setTitle] = useState(searchedText);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveGallery(title);
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
            SAVE GALLERY / {selectedCount}
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
