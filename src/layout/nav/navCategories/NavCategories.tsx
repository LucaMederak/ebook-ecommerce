import React from "react";

//styles
import * as Styled from "./NavCategories.styles";

//components
import NavCategory from "./navCategory/NavCategory";

//queries
import { GetCategories } from "@/queries/categories/getCategories";

const NavCategories = () => {
  const { categories, categoriesError, categoriesLoading } = GetCategories();

  if (categoriesLoading) return <div>loading...</div>;
  if (categoriesError) return <div>error...</div>;

  return (
    <Styled.NavCategoriesWrapper>
      {categories.slice(0, 8).map((category) => (
        <NavCategory
          key={category.id}
          categoryId={category.id}
          category={category}
        />
      ))}
    </Styled.NavCategoriesWrapper>
  );
};

export default NavCategories;
