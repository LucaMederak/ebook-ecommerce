import React from "react";
import Link from "next/link";

//styles
import * as Styled from "./Burger.styles";

//icons
import * as Icon from "@/icons/icons";

//utils

//interfaces
import { IBurgerProps } from "./Burger.interfaces";

//animations
import { burgerAnimations } from "./Burger.animations";

//apollo
import { GetCategories } from "@/queries/categories/getCategories";

const Burger = ({ setBurgerOpen }: IBurgerProps) => {
  const { categories, categoriesLoading, categoriesError } = GetCategories();

  if (categoriesLoading) return <div>loading...</div>;
  if (categoriesError) return <div>error...</div>;

  return (
    <Styled.BurgerOverlay
      variants={burgerAnimations}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Styled.BurgerContent>
        <Styled.Close onClick={() => setBurgerOpen(false)}>
          <Icon.FaTimes />
        </Styled.Close>
        <Styled.BurgerLinks>
          {categories.length > 0 &&
            categories.map((category) => (
              <Link
                key={category.id}
                href={`/kategorie/${category.slug}`}
                passHref
              >
                <li>
                  <a> {category.name} </a>
                </li>
              </Link>
            ))}
        </Styled.BurgerLinks>
      </Styled.BurgerContent>
    </Styled.BurgerOverlay>
  );
};

export default Burger;
