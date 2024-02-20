// SelectedPhotosContext.tsx
import React, { ReactNode, createContext, useState } from "react";
import { PhotoType } from "../interfaces/interfaces";

interface SelectedPhotosContextType {
  selectedPhotos: PhotoType[];
  setSelectedPhotos: (
    value: PhotoType[] | ((prev: PhotoType[]) => PhotoType[])
  ) => void;
}

interface SelectedPhotosProviderProps {
  children: ReactNode;
}

// Create Context with an initial undefined value but assert the type
export const SelectedPhotosContext = createContext<
  SelectedPhotosContextType | undefined
>(undefined);

// Provider Component
export const SelectedPhotosProvider: React.FC<SelectedPhotosProviderProps> = ({
  children,
}) => {
  const [selectedPhotos, setSelectedPhotos] = useState<PhotoType[]>([]);

  return (
    <SelectedPhotosContext.Provider
      value={{
        selectedPhotos,
        setSelectedPhotos,
      }}
    >
      {children}
    </SelectedPhotosContext.Provider>
  );
};
