import React from "react";
import { IChildrenProps } from "@/interfaces/children.interfaces";

import * as Styled from "./CategoryContainer.styles";

const CategoryContainer = ({ children }: IChildrenProps) => {
  return <Styled.CategoriesContainer>{children}</Styled.CategoriesContainer>;
};

export default CategoryContainer;
