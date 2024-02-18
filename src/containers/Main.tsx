import Galleries from "../components/Galleries";
import ImagesGrid from "../components/ImagesGrid";
import { ResultLabel } from "../components/styles";
import { DataType } from "../interfaces/interfaces";

interface Props {
  data: DataType | null;
  error: string | null;
  searchedText: string;
  fetchPaginatedPhotos: (page: number) => void;
}

const Main: React.FC<Props> = ({
  data,
  error,
  searchedText,
  fetchPaginatedPhotos,
}) => {
  return (
    <>
      <Galleries />
      {data ? (
        <ImagesGrid
          data={data}
          searchedText={searchedText}
          fetchPaginatedPhotos={fetchPaginatedPhotos}
        />
      ) : (
        error
      )}
      {!searchedText && <ResultLabel>Search for images</ResultLabel>}
    </>
  );
};

export default Main;
