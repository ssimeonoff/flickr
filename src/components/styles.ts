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
  height: 30px;
  padding: 0 20px;
  border-radius: 20px;
  background: linear-gradient(#fff, #888);
  cursor: pointer;
  &:disabled {
    background: #444;
  }
`;

const ImageContainer = styled.div<{ $thumbnail: boolean }>`
  position: relative;
  width: ${(props) => props.$thumbnail && "150px"};
  height: ${(props) => props.$thumbnail && "150px"};
  color: #ccc;
`;

const Image = styled.img<{ $selected: boolean; $thumbnail: boolean }>`
  width: ${(props) => props.$thumbnail && "150px"};
  height: ${(props) => props.$thumbnail && "150px"};
  max-width: 100%;
  object-fit: cover;
  cursor: ${(props) => props.$thumbnail && "pointer"};
  transform: ${(props) => props.$selected && "scale(0.9)"};
`;

const Checkmark = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  border-radius: 50%;
  border: 2px solid #222;
  color: black;
  background: linear-gradient(#29e56c, #15833c);
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
  background: linear-gradient(#29e56c, #15833c);
  font-weight: 600;
  cursor: pointer;
`;

const ClearButton = styled(SearchButton)`
  background: linear-gradient(#fff, #888);
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
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: linear-gradient(#fff, #888);
  cursor: pointer;
`;

const DeleteButton = styled(CloseButton)`
  right: 50px;
  background: linear-gradient(#f44, #b43030);
`;

const GalleryLabelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const GalleryLabel = styled.button<{ $selected: boolean }>`
  background: ${(props) =>
    props.$selected ? "#444" : "linear-gradient(#fff,#888)"};
  color: black;
  padding: 0px 15px;
  height: 30px;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
`;

export {
  TilesContainer,
  ResultLabel,
  PaginationContainer,
  PageLabel,
  PaginationButton,
  CloseButton,
  DeleteButton,
  SelectedGalleryContainer,
  ImageContainer,
  Image,
  Checkmark,
  SearchContainer,
  SearchInput,
  SearchButton,
  ClearButton,
  GalleriesContainer,
  GalleryLabel,
  GalleryLabelContainer,
};
