import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import * as Styled from "./Product.styles";

//interfaces
import { IProductProps } from "./Product.interfaces";
import { IProduct } from "@/interfaces/products.interfaces";

//store
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "@/store/cart";

//icons
import { FaCartPlus } from "react-icons/fa";
import { RootState } from "@/store/store";

//context
import { useCartAlert } from "@/context/CartAlert";

const Product = ({ product }: IProductProps) => {
  const { handleCartAlert } = useCartAlert();
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);
  const [activeShopItem, setActiveShopItem] = useState(false);
  const dispatch = useDispatch();

  const addToCart = (newCartItem: IProduct) => {
    //add to redux cart store

    const price = newCartItem.salePrice || newCartItem.price;
    dispatch(
      addCartItem({
        id: newCartItem.id,
        title: newCartItem.title,
        imageUrl: newCartItem.img.url,
        regularPrice: newCartItem.price,
        salePrice: newCartItem.salePrice || undefined,
        price: price,
      })
    );

    handleCartAlert(
      true,
      "Dodano produkt do koszyka",
      newCartItem.title,
      price,
      newCartItem.img.url
    );
  };

  const getProductCart = (productId: string) => {
    const cartIds = items.map((item) => item.id);
    const productInCart = cartIds.includes(productId);

    if (productInCart) {
      return true;
    }

    return false;
  };

  return (
    <Styled.ProductWrapper
      onMouseEnter={() => setActiveShopItem(true)}
      onMouseLeave={() => setActiveShopItem(false)}
    >
      <Styled.ProductImageWrapper>
        <Image
          layout="fill"
          objectFit="contain"
          quality={60}
          src={product.img.url}
          alt="ebookcommerce-product"
        />
      </Styled.ProductImageWrapper>
      <Styled.ProductPriceWrapper>
        <h1>{product.title}</h1>
        <Styled.ProductPrice>
          {product.salePrice ? (
            <div>
              <h2>{product.salePrice} zł</h2>
              <h3>{product.price} zł</h3>
            </div>
          ) : (
            <h2>{product.price} zł</h2>
          )}
          <button
            aria-label="addToCart"
            // disabled={getProductCart(product.id)}
            onClick={() => addToCart(product)}
          >
            <FaCartPlus />
          </button>
        </Styled.ProductPrice>
      </Styled.ProductPriceWrapper>

      <AnimatePresence>
        {product.shortDescription && activeShopItem && (
          <Styled.ProductDescriptionWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>{product.shortDescription}</p>
            <Link href={`/produkt/${product.slug}`}>
              <a>zobacz</a>
            </Link>
          </Styled.ProductDescriptionWrapper>
        )}
      </AnimatePresence>
      {product.salePrice && (
        <Styled.ProductSalePrice>
          <p>promocja</p>
        </Styled.ProductSalePrice>
      )}
    </Styled.ProductWrapper>
  );
};

export default Product;
