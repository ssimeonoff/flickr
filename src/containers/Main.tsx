import Galleries from "../components/Galleries";
import ImagesGrid from "./Images";
import { useFlickrContext } from "../contexts/FlickrContext";

const Main: React.FC = () => {
  const { data, error } = useFlickrContext();

  return (
    <>
      <Galleries />
      {data ? <ImagesGrid /> : error}
    </>
  );
};

export default Main;
