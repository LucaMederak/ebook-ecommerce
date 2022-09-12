import { useQuery } from "@apollo/client";
import { CategoriesQuery } from "./categories.query";
import { ICategoriesQuery } from "./categories.interfaces";
import { ICategory } from "@/interfaces/categories.interfaces";

export const GetCategories = () => {
  const { data, error, loading } = useQuery<ICategoriesQuery>(CategoriesQuery);

  const categories = data?.categoriesCollection.items.map((categoryData) => {
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

    return category;
  }) as ICategory[];

  return {
    categories,
    categoriesLoading: !categories && !error,
    categoriesError: error,
  };
};
