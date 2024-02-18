import styled from "styled-components";

const TilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1600px;
  gap: 2px;
  margin: 20px auto;
`;

const ResultLabel = styled.div`
  color: #ccc;
  margin: 10px;
  font-size: 20px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  margin: 10px auto;
  color: #ccc;
`;

const PageLabel = styled.div`
  min-width: 70px;
`;

const PaginationButton = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
`;

const ImageContainer = styled.div<{ $thumbnail: boolean }>`
  position: relative;
  height: ${(props) => props.$thumbnail && "150px"};
`;

const Image = styled.img<{ $selected: boolean; $thumbnail: boolean }>`
  width: ${(props) => props.$thumbnail && "150px"};
  height: ${(props) => props.$thumbnail && "150px"};
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid;
  box-sizing: border-box;
  cursor: pointer;
  transform: ${(props) => props.$selected && "scale(0.9)"};
`;

const Checkmark = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 2px solid #222;
  line-height: 20px;
  background-color: #eee;
  color: darkgreen;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  background-color: #000;
`;

const SearchInput = styled.input`
  padding: 0 10px;
  height: 30px;
  border-radius: 20px;
`;

const SearchButton = styled.button`
  padding: 0 20px;
  margin-left: 10px;
  height: 34px;
  border-radius: 20px;
  background-color: #50a050;
  cursor: pointer;
`;

const GalleriesContainer = styled.div`
  border-bottom: 1px solid #000;
  color: #ccc;
  padding-bottom: 20px;
`;

const SelectedGalleryContainer = styled.div`
  position: relative;
  margin-top: 20px;
  padding-bottom: 10px;
  border-top: 1px solid #000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
`;

const GalleryLabel = styled.span`
  background-color: #ccc;
  color: black;
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;
`;

export {
  TilesContainer,
  ResultLabel,
  PaginationContainer,
  PageLabel,
  PaginationButton,
  CloseButton,
  SelectedGalleryContainer,
  ImageContainer,
  Image,
  Checkmark,
  SearchContainer,
  SearchInput,
  SearchButton,
  GalleriesContainer,
  GalleryLabel,
};
