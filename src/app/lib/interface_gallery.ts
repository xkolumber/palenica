export interface Gallery {
  title: string;
  _id: string;
  _createdAt: string;
  title_photo: string;
  photos: Photo[];
}

export interface Photo {
  image: {
    asset: {
      _ref: string;
    };
    description: string;
  };
}
