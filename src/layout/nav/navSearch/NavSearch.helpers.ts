//interfaces
import { ICategory } from "@/interfaces/categories.interfaces";
import { IProduct } from "@/interfaces/products.interfaces";

export interface ISearchData {
  id: string;
  type: "produkt" | "kategoria";
  name: string;
  slug: string;
  description: string;
  image: string;
  price?: number;
  salePrice?: number;
  regularPrice?: number;
}

export const search = (data: ISearchData[], searchData: string) => {
  const dataFilter = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        value.toString().toLowerCase().indexOf(searchData.toLowerCase()) > -1
    )
  );

  return dataFilter;
};

export const productsMainValues = (products: IProduct[]) => {
  const productsValues: ISearchData[] = products.map((product) => ({
    id: product.id,
    type: "produkt",
    name: product.title,
    slug: product.slug,
    description: product.shortDescription || "",
    image: product.img.url || "",
    price: product.salePrice ? product.salePrice : product.price,
    salePrice: product.salePrice || 0,
    regularPrice: product.price,
  }));

  return productsValues;
};

export const categoriesMainValues = (categories: ICategory[]) => {
  const categoriesValues: ISearchData[] = categories.map((category) => ({
    id: category.id,
    type: "kategoria",
    name: category.name,
    slug: category.slug,
    description: category.shortDescription || "",
    image: category.img.url || "",
  }));

  return categoriesValues;
};

export type ProductsSearch = ReturnType<typeof productsMainValues>;
export type CategoriesSearch = ReturnType<typeof categoriesMainValues>;
export type Search = ReturnType<typeof search>;
