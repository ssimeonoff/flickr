import { useState } from "react";
import {
  GalleriesContainer,
  GalleryLabel,
  ResultLabel,
  GalleryLabelContainer,
} from "./styles";
import { GalleryTypeIndexed } from "../interfaces/interfaces";
import GalleryView from "./GalleryView";

interface Props {
  galleries: GalleryTypeIndexed[];
  deleteGallery: (id: number) => void;
}

//Renders the exisiting galleries and the gallery view
const Galleries: React.FC<Props> = ({ galleries, deleteGallery }) => {
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);

  return (
    <GalleriesContainer>
      <ResultLabel>Galleries</ResultLabel>

      <GalleryLabelContainer>
        {galleries.map((gallery) => {
          return (
            <GalleryLabel
              key={gallery.id}
              $selected={selectedGallery === gallery.id}
              onClick={() => {
                setSelectedGallery(gallery.id);
              }}
            >
              {gallery.name}
            </GalleryLabel>
          );
        })}
      </GalleryLabelContainer>

      {selectedGallery !== null && (
        <GalleryView
          gallery={galleries[selectedGallery]}
          setSelectedGallery={setSelectedGallery}
          deleteGallery={deleteGallery}
        />
      )}
    </GalleriesContainer>
  );
};

export default Galleries;
