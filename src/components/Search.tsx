import { ChangeEvent, useState } from "react";
import { SearchContainer, SearchInput, SearchButton } from "./styles";

interface Props {
  fetchPhotos: (text: string) => void;
}

const Search: React.FC<Props> = ({ fetchPhotos }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Perform search operation with the searchTerm
    searchText && fetchPhotos(searchText);
    setSearchText("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleChange}
      />
      <SearchButton onClick={handleSearch}>
        <i className="fa-solid fa-play"></i>
      </SearchButton>
    </SearchContainer>
  );
};

export default Search;
