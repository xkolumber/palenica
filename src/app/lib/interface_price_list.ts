export interface PriceList {
  title: string;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
  content: any;
  price_service: string;
  tax: string;
  all: string;
  price_valid_from: string;
  pdf: {
    asset: {
      _ref: string;
    };
  };
}
