import React from "react";

import { GetCategories } from "@/queries/categories/getCategories";
import Heading from "../heading/Heading";
import Section from "@/components/section/Section";
import Category from "@/components/category/Category";
import CategoryContainer from "@/components/category/categoryContainer/CategoryContainer";
import Info from "@/components/info/Info";
import SectionLoading from "@/components/loading/section/SectionLoading";

const Categories = () => {
  const { categories, categoriesLoading, categoriesError } = GetCategories();

  if (categoriesLoading) return <SectionLoading />;
  if (categoriesError) return null;

  return (
    <>
      {categories.length > 0 && (
        <Section>
          <Heading title="Kategorie" align="center">
            <Info>kategorie</Info>
          </Heading>
          <CategoryContainer>
            {categories.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </CategoryContainer>
        </Section>
      )}
    </>
  );
};

export default Categories;
