import React from "react";

//styles
import * as Styled from "./ProductList.styles";

//interfaces
import { IProduct } from "@/interfaces/products.interfaces";

//components
import Product from "../Product";

import Image from "next/image";

//assets
import EmptyCategoryImg from "@/assets/search-result.svg";

interface IProductListProps {
  products: IProduct[];
}

const ProductList = ({ products }: IProductListProps) => {
  return (
    <>
      {products.length === 0 && (
        <Styled.EmptyProductCategory>
          <h2>Nie znaleziono produktów</h2>
          <Image
            width={200}
            height={200}
            src={EmptyCategoryImg}
            objectFit="contain"
            alt="ebookcommerce-empty-data"
          />
        </Styled.EmptyProductCategory>
      )}
      <Styled.ProductList>
        {products.length > 0 &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </Styled.ProductList>
    </>
  );
};

export default ProductList;
