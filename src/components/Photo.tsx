import { useState } from "react";
import { Image, Checkmark, ImageContainer } from "./styles";
import { PhotoType } from "../interfaces/interfaces";

const Photo: React.FC<PhotoType> = ({
  title,
  farm,
  id,
  secret,
  server,
  thumbnail = false,
  selected = false,
  toggleSelectedPhoto,
}) => {
  const path = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  const [isSelected, setIsSelected] = useState(selected);

  return (
    <ImageContainer $thumbnail={thumbnail}>
      <Image
        $thumbnail={thumbnail}
        $selected={isSelected}
        src={path}
        alt={title}
        onClick={() => {
          thumbnail && setIsSelected((prevState) => !prevState);
          toggleSelectedPhoto &&
            toggleSelectedPhoto(title, farm, id, secret, server);
        }}
      />
      {isSelected && (
        <Checkmark>
          <i className="fa-solid fa-check"></i>
        </Checkmark>
      )}
    </ImageContainer>
  );
};

export default Photo;
