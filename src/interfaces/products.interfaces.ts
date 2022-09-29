import * as RichTextType from "@contentful/rich-text-types";

export interface IProduct {
  id: string;
  title: string;
  slug: string;
  price: number;
  salePrice?: number;
  shortDescription?: string;
  description?: RichTextType.Document;
  category: {
    id?: string;
    name?: string;
  };
  // subCategory: {
  //   id?: string;
  //   name?: string;
  // };
  img: {
    id: string;
    url: string;
  };
  gallery?: { id: string; url: string }[];
}
