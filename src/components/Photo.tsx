import { memo } from "react";
import { Image, Checkmark, ImageContainer } from "./styles";
import { PhotoType } from "../interfaces/interfaces";

interface Props {
  photo: PhotoType;
  thumbnail?: boolean;
  isPhotoSelected?: boolean;
  toggleSelectedPhoto?: (photo: PhotoType) => void;
}

const Photo: React.FC<Props> = ({
  photo,
  thumbnail = false,
  isPhotoSelected = false,
  toggleSelectedPhoto,
}) => {
  const { title, farm, id, secret, server } = photo;
  const path = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

  return (
    <ImageContainer $thumbnail={thumbnail}>
      <Image
        $thumbnail={thumbnail}
        $selected={isPhotoSelected}
        src={path}
        alt={title}
        onClick={() => toggleSelectedPhoto && toggleSelectedPhoto(photo)}
      />
      {isPhotoSelected && (
        <Checkmark>
          <i className="fa-solid fa-check"></i>
        </Checkmark>
      )}
    </ImageContainer>
  );
};

export default memo(Photo);
