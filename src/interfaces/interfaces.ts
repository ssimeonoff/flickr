export interface DataType {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    photo: {
      farm: number;
      id: string;
      isfamily: number;
      isfriend: number;
      ispublic: number;
      owner: string;
      secret: string;
      server: string;
      title: string;
    }[];
    total: number;
  };
}

export interface GalleryType {
  name: string;
  photos: {
    farm: number;
    id: string;
    secret: string;
    server: string;
    title: string;
  }[];
}

export interface GalleryTypeIndexed {
  name: string;
  photos: {
    farm: number;
    id: string;
    secret: string;
    server: string;
    title: string;
  }[];
  id: number;
}

export interface PhotoType {
  farm: number;
  id: string;
  secret: string;
  server: string;
  title: string;
  thumbnail?: boolean;
  toggleSelectedPhoto?: (
    title: string,
    farm: number,
    id: string,
    secret: string,
    server: string
  ) => void;
}
