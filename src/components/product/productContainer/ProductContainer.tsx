import React from "react";

import { IChildrenProps } from "@/interfaces/children.interfaces";

import * as Styled from "./ProductContainer.styles";

const ProductContainer = ({ children }: IChildrenProps) => {
  return <Styled.ProductsContainer>{children}</Styled.ProductsContainer>;
};

export default ProductContainer;
