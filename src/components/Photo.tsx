import { useEffect, useState } from "react";
import { Image, Checkmark, ImageContainer } from "./styles";
import { PhotoType } from "../interfaces/interfaces";

const Photo: React.FC<PhotoType> = ({
  title,
  farm,
  id,
  secret,
  server,
  thumbnail = false,
  toggleSelectedPhoto,
}) => {
  const path = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  const [selected, setSelected] = useState(false);

  return (
    <ImageContainer $thumbnail={thumbnail}>
      <Image
        $thumbnail={thumbnail}
        $selected={selected}
        src={path}
        alt={title}
        onClick={() => {
          setSelected((prevState) => !prevState);
          toggleSelectedPhoto &&
            toggleSelectedPhoto(title, farm, id, secret, server);
        }}
      />
      {selected && (
        <Checkmark>
          <i className="fa-solid fa-circle-check"></i>
        </Checkmark>
      )}
    </ImageContainer>
  );
};

export default Photo;
