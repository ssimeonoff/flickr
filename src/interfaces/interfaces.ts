export interface PhotoType {
  farm: number;
  id: string;
  secret: string;
  server: string;
  title: string;
  thumbnail?: boolean;
  selected?: boolean;
}

export interface DataType {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: PhotoType[];
  };
}

export interface GalleryType {
  name: string;
  photos: PhotoType[];
}

export interface GalleryTypeIndexed extends GalleryType {
  id: number;
}
