import React from "react";

import ProductContainer from "@/components/product/productContainer/ProductContainer";
import Product from "@/components/product/Product";
import { GetProducts } from "@/queries/products/getProducts";
import Heading from "../heading/Heading";
import Section from "@/components/section/Section";
import Info from "@/components/info/Info";
import SectionLoading from "@/components/loading/section/SectionLoading";

const SaleProducts = () => {
  const { products, productsLoading, productsError } = GetProducts();

  if (productsLoading) return <SectionLoading />;
  if (productsError) return null;

  const saleProducts = products.filter((product) => product.salePrice);

  if (saleProducts.length < 1) return null;

  return (
    <>
      <Section>
        <Heading title="Nie przegap okazji" align="center">
          <Info>promocje</Info>
        </Heading>
        <ProductContainer>
          {saleProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductContainer>
      </Section>
    </>
  );
};

export default SaleProducts;
