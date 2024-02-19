import Galleries from "../components/Galleries";
import ImagesGrid from "../components/ImagesGrid";
import { ResultLabel } from "../components/styles";
import useGalleries from "../hooks/useGalleries";
import { DataType } from "../interfaces/interfaces";

interface Props {
  data: DataType | null;
  error: string | null;
  searchedText: string;
  fetchPaginatedPhotos: (page: number) => void;
  clearSearch: () => void;
}

const Main: React.FC<Props> = ({
  data,
  error,
  searchedText,
  fetchPaginatedPhotos,
  clearSearch,
}) => {
  const { galleries, saveNewGallery, deleteGallery } = useGalleries();

  return (
    <>
      <Galleries galleries={galleries} deleteGallery={deleteGallery} />
      {data ? (
        <ImagesGrid
          data={data}
          searchedText={searchedText}
          fetchPaginatedPhotos={fetchPaginatedPhotos}
          clearSearch={clearSearch}
          saveNewGallery={saveNewGallery}
        />
      ) : (
        error
      )}
      {!searchedText && <ResultLabel>Search for images</ResultLabel>}
    </>
  );
};

export default Main;
