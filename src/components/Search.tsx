import { ChangeEvent, useRef, useState } from "react";
import { SearchContainer, SearchInput, SearchButton } from "./styles";
import { useFlickrContext } from "../contexts/FlickrContext";

const Search: React.FC = () => {
  const { fetchPhotos } = useFlickrContext();
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    searchText && fetchPhotos(searchText);
    setSearchText("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  // trigger submit when pressing enter
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        ref={inputRef}
      />
      <SearchButton onClick={handleSearch}>
        <i className="fa-solid fa-play"></i>
      </SearchButton>
    </SearchContainer>
  );
};

export default Search;
