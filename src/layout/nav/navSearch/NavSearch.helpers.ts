//interfaces
import { ICategory } from "@/interfaces/categories.interfaces";

export const search = (data: CategoriesSearch, searchData: string) => {
  const dataFilter = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        value.toString().toLowerCase().indexOf(searchData.toLowerCase()) > -1
    )
  );

  return dataFilter;
};

export const categoriesMainValues = (categories: ICategory[]) => {
  const categoriesValues = categories.map((category) => ({
    id: category.id,
    type: "kategoria",
    name: category.name,
    description: category.shortDescription || "",
    image: category.img.url || "",
  }));

  return categoriesValues;
};

export type CategoriesSearch = ReturnType<typeof categoriesMainValues>;
export type Search = ReturnType<typeof search>;
