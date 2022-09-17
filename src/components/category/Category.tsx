import React from "react";
import { ICategoryProps } from "./Category.interfaces";
import Image from "next/image";
import * as Styled from "./Category.styles";
import { useRouter } from "next/router";

const Category = ({ category }: ICategoryProps) => {
  const router = useRouter();

  return (
    <Styled.CategoryWrapper
      onClick={() => router.push(`/kategorie/${category.slug}`)}
    >
      <Styled.CategoryTitleWrapper>
        <h2>{category.name}</h2>
      </Styled.CategoryTitleWrapper>
      <Styled.CategoryImageWrapper>
        <Image
          layout="fill"
          objectFit="cover"
          quality={60}
          src={category.img.url}
          alt="ebookcommerce-category"
        />
      </Styled.CategoryImageWrapper>
    </Styled.CategoryWrapper>
  );
};

export default Category;
