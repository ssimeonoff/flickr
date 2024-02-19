import { PhotoType } from "../interfaces/interfaces";
import Photo from "./Photo";
import { TilesContainer } from "./styles";

interface Props {
  photos: PhotoType[];
  isPhotoSelected: (photo: PhotoType) => boolean;
  toggleSelectedPhoto: (photo: PhotoType) => void;
}

const PhotosGrid: React.FC<Props> = ({
  photos,
  toggleSelectedPhoto,
  isPhotoSelected,
}) => {
  return (
    <TilesContainer>
      {photos.map((photo) => {
        return (
          <Photo
            key={photo.id}
            photo={photo}
            thumbnail={true}
            toggleSelectedPhoto={toggleSelectedPhoto}
            selected={isPhotoSelected(photo)}
          />
        );
      })}
    </TilesContainer>
  );
};

export default PhotosGrid;
