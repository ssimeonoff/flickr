import Galleries from "../components/Galleries";
import ImagesGrid from "./Images";
import { useFlickr } from "../hooks/useFlickr";

const Main: React.FC = () => {
  const { data, error } = useFlickr();

  return (
    <>
      <Galleries />
      {data ? <ImagesGrid /> : error}
    </>
  );
};

export default Main;
