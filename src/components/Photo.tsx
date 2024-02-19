import { useState } from "react";
import { Image, Checkmark, ImageContainer } from "./styles";
import { PhotoType } from "../interfaces/interfaces";

interface Props {
  photo: PhotoType;
  thumbnail?: boolean;
  selected?: boolean;
  toggleSelectedPhoto?: (photo: PhotoType) => void;
}

const Photo: React.FC<Props> = ({
  photo,
  thumbnail = false,
  selected = false,
  toggleSelectedPhoto,
}) => {
  const { title, farm, id, secret, server } = photo;
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
          toggleSelectedPhoto && toggleSelectedPhoto(photo);
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
