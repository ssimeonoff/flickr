import { useState } from "react";
import {
  GalleriesContainer,
  GalleryLabel,
  ResultLabel,
  GalleryLabelContainer,
} from "./styles";
import GalleryView from "./GalleryView";
import { useGalleries } from "../hooks/useGalleries";

//Renders the exisiting galleries and the gallery view
const Galleries: React.FC = () => {
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);

  const { galleries } = useGalleries();

  return (
    <>
      {galleries.length > 0 && (
        <GalleriesContainer>
          <ResultLabel>Galleries</ResultLabel>

          <GalleryLabelContainer>
            {galleries.map((gallery) => {
              return (
                <GalleryLabel
                  key={gallery.id}
                  $selected={selectedGallery === gallery.id}
                  disabled={selectedGallery === gallery.id}
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
            />
          )}
        </GalleriesContainer>
      )}
    </>
  );
};

export default Galleries;
