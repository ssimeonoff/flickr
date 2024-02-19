import useFlickr from "../hooks/useFlickr";
import Search from "../components/Search";
import Main from "./Main";

const Dashboard: React.FC = () => {
  const {
    fetchPhotos,
    fetchPaginatedPhotos,
    clearSearch,
    data,
    error,
    searchedText,
  } = useFlickr();

  return (
    <>
      <Search fetchPhotos={fetchPhotos} />
      <Main
        data={data}
        error={error}
        searchedText={searchedText}
        fetchPaginatedPhotos={fetchPaginatedPhotos}
        clearSearch={clearSearch}
      />
    </>
  );
};

export default Dashboard;
