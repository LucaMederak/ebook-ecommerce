import React from "react";

//components
import ProductContainer from "@/components/product/productContainer/ProductContainer";
import Product from "@/components/product/Product";
import Section from "@/components/section/Section";
import Heading from "../heading/Heading";
import Info from "@/components/info/Info";
import SectionLoading from "@/components/loading/section/SectionLoading";

//query
import { GetProducts } from "@/queries/products/getProducts";

const RecommendProducts = () => {
  const { products, productsLoading, productsError } = GetProducts();

  if (productsLoading) return <SectionLoading />;
  if (productsError) return null;

  return (
    <>
      {products.length > 0 && (
        <Section>
          <Heading title="Najchętniej wybierane ebooki" align="center">
            <Info>bestsellery</Info>
          </Heading>
          <ProductContainer>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductContainer>
        </Section>
      )}
    </>
  );
};

export default RecommendProducts;
