import { useQuery } from "@apollo/client";
import { CategoryQuery } from "./category.query";
import { ICategoryQuery, ICategoryData } from "./category.interfaces";
import { ICategory } from "@/interfaces/categories.interfaces";

export const GetCategory = (slug: string) => {
  const { data, error, loading } = useQuery<ICategoryQuery>(CategoryQuery, {
    variables: { slug },
  });

  const categoryData = data?.categoriesCollection.items[0];

  if (!categoryData) {
    return {
      category: undefined,
      categoryLoading: !categoryData && !error,
      categoryError: error,
    };
  }

  const category: ICategory = {
    id: categoryData.sys.id,
    name: categoryData.name,
    slug: categoryData.slug,
    shortDescription: categoryData.shortDescription,
    img: {
      id: categoryData.image.sys.id,
      url: categoryData.image.url,
    },
  };

  return {
    category,
    categoryLoading: !category && !error,
    categoryError: error,
  };
};
