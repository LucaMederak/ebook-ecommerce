import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

//styles
import * as Styled from "./Nav.styles";

//assets
import Logo from "@/assets/logo.svg";

//hooks
import { usePageBlur } from "@/context/PageBlur";

//icons
import * as Icon from "@/icons/icons";

//components
import NavHeader from "./navHeader/NavHeader";
import ThemeOption from "./navOptions/themeOption/ThemeOption";
// import AccountOption from "./navOptions/accountOption/AccountOption";
import CartOption from "./navOptions/cartOption/CartOption";
import NavCategories from "./navCategories/NavCategories";
import NavSearchPopup from "./navSearch/NavSearchPopup";
import SectionLoading from "@/components/loading/section/SectionLoading";

//interfaces
import { IBurgerProps } from "../nav/burger/Burger.interfaces";

//helpers
import {
  search,
  categoriesMainValues,
  productsMainValues,
} from "./navSearch/NavSearch.helpers";

//apollo
import { GetCategories } from "@/queries/categories/getCategories";
import { GetProducts } from "@/queries/products/getProducts";

const Nav = ({ setBurgerOpen }: Pick<IBurgerProps, "setBurgerOpen">) => {
  const { categories, categoriesLoading, categoriesError } = GetCategories();
  const { products, productsLoading, productsError } = GetProducts();

  const { showPageBlur, deletePageBlur, tooglePageBlur } = usePageBlur();
  const [searchData, setSearchData] = useState("");

  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  useEffect(() => {
    if (searchData) {
      return showPageBlur();
    }

    if (!searchData) {
      return deletePageBlur();
    }
  }, [searchData, deletePageBlur, showPageBlur]);

  if (categoriesLoading || productsLoading) return <SectionLoading />;
  if (categoriesError || productsError) return null;

  //concat products & categories
  const data = [
    ...categoriesMainValues(categories),
    ...productsMainValues(products),
  ];

  return (
    <Styled.Container>
      <Styled.NavWrapper>
        <Link href="/">
          <a>
            <Image
              src={Logo}
              width={160}
              height={50}
              objectFit="contain"
              alt="ebookcommerce"
            />
          </a>
        </Link>
        <Styled.NavSearchWrapper>
          <Styled.Burger onClick={() => setBurgerOpen(true)}>
            <Icon.FaBars />
          </Styled.Burger>
          <Styled.NavSearch>
            <input onChange={handleSearchData} value={searchData} />
            <button>
              <Icon.FaSearch />
            </button>
          </Styled.NavSearch>
        </Styled.NavSearchWrapper>
        <Styled.NavOptionsWrapper>
          <ThemeOption />
          <CartOption />
        </Styled.NavOptionsWrapper>
        {searchData && (
          <NavSearchPopup
            data={search(data, searchData)}
            setSearchData={setSearchData}
          />
        )}
      </Styled.NavWrapper>

      <NavCategories />
    </Styled.Container>
  );
};

export default Nav;
