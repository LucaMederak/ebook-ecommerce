import * as RichTextType from "@contentful/rich-text-types";

export interface IProductData {
  sys: {
    id: string;
  };
  title: string;
  slug: string;
  price: number;
  salePrice?: number;
  shortDescription: string;
  description: {
    json: RichTextType.Document;
  };
  category: {
    sys: {
      id: string;
    };
    name: string;
  };
  // subCategory: {
  //   sys: {
  //     id: string;
  //   };
  //   name: string;
  // };
  image: {
    sys: {
      id: string;
    };
    url: string;
  };
  galleryCollection: {
    items: {
      sys: {
        id: string;
      };
      url: string;
    }[];
  };
}

export interface IProductQuery {
  productsCollection: {
    items: IProductData[];
  };
}
