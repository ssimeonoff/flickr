import { ChangeEvent, FormEvent, useState } from "react";
import { SearchButton, SearchInput } from "./styles";

interface Props {
  active: boolean;
  searchedText: string;
  selectedCount: number;
  saveGallery: (title: string) => void;
}

const NewGallery: React.FC<Props> = ({
  active,
  searchedText,
  selectedCount,
  saveGallery,
}) => {
  const [title, setTitle] = useState(searchedText);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveGallery(title);
  };
  console.log("render");
  return (
    <div>
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
        </form>
      )}
    </div>
  );
};

export default NewGallery;
