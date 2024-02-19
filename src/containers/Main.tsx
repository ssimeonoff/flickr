import Galleries from "../components/Galleries";
import ImagesGrid from "./Images";
import { ResultLabel } from "../components/styles";
import { useFlickrContext } from "../contexts/FlickrContext";

const Main: React.FC = () => {
  const { data, error, searchedText } = useFlickrContext();

  return (
    <>
      <Galleries />
      {data ? <ImagesGrid /> : error}
      {!searchedText && <ResultLabel>Search for images</ResultLabel>}
    </>
  );
};

export default Main;
