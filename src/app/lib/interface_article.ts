export interface Article {
  title: string;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
  content: any;
  time_reading: string;
  authors: string[];
}
