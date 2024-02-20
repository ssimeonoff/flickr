import { PhotoType } from "../interfaces/interfaces";
import Photo from "../components/Photo";
import { TilesContainer } from "../components/styles";
import { usePhotosGrid } from "../hooks/usePhotosGrid";

interface Props {
  photos: PhotoType[];
}

const PhotosGrid: React.FC<Props> = ({ photos }) => {
  const { isPhotoSelected, toggleSelectedPhoto } = usePhotosGrid();

  return (
    <TilesContainer>
      {photos.map((photo) => {
        return (
          <Photo
            key={photo.farm + photo.id + photo.secret + photo.server}
            photo={photo}
            thumbnail={true}
            isPhotoSelected={isPhotoSelected(photo)}
            toggleSelectedPhoto={toggleSelectedPhoto}
          />
        );
      })}
    </TilesContainer>
  );
};

export default PhotosGrid;
