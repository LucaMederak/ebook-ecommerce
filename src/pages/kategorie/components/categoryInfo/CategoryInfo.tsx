import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//animations
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation, fadeItem } from "@/animations/fade";

//assets
import HealthyFoodImg from "@/assets/heathy-food.jpg";

//styles
import * as Styled from "./CategoryInfo.styles";

//interfaces
import { ICategory } from "@/interfaces/categories.interfaces";

interface ICategoryInfoProps {
  category: ICategory;
}

const CategoryInfo = ({ category }: ICategoryInfoProps) => {
  const imageRender = () => {
    if (category.img) {
      return category.img.url;
    }

    return HealthyFoodImg;
  };

  return (
    <Styled.ImageWrapper>
      <Image
        src={imageRender()}
        alt={category.name}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />

      <Styled.CategoryInfoWrapper
        variants={fadeAnimation}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={fadeItem}>{category.name}</motion.h1>
        <motion.p variants={fadeItem}>{category.shortDescription}</motion.p>
      </Styled.CategoryInfoWrapper>
    </Styled.ImageWrapper>
  );
};

export default CategoryInfo;
