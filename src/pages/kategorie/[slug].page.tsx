import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//interfaces
import { IParams } from "@/interfaces/params.interfaces";

//queries
import { GetCategory } from "@/queries/category/getCategory";
import { GetProducts } from "@/queries/products/getProducts";

//components
import PageNavInfo from "@/components/pageNavInfo/PageNavInfo";
import CategoryInfo from "./components/categoryInfo/CategoryInfo";
import ProductList from "@/components/product/productList/ProductList";
import Section from "@/components/section/Section";
import SectionLoading from "@/components/loading/section/SectionLoading";

//icons
import { FaChevronRight } from "react-icons/fa";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query as IParams;
  const { category, categoryLoading, categoryError } = GetCategory(slug);
  const { products, productsLoading, productsError } = GetProducts();

  if (categoryLoading || productsLoading) return <SectionLoading />;
  if (categoryError || productsError) return null;
  if (!category) return null;

  const categoryProducts = products.filter(
    (product) => product.category.id === category?.id
  );

  return (
    <Section>
      <PageNavInfo>
        <Link href={"/"}>
          <a>Sklep</a>
        </Link>
        <FaChevronRight />
        <Link href={`/${category.slug}`}>
          <a>{category.name}</a>
        </Link>
      </PageNavInfo>
      <CategoryInfo category={category} />
      <ProductList products={categoryProducts} />
    </Section>
  );
};

export default Category;
