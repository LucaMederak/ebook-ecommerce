import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

//contentful
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Node } from "@contentful/rich-text-types";

//store
import { addCartItem, removeCartItem } from "../../store/cart";
import { useSelector, useDispatch } from "react-redux";
import { GetProduct } from "@/queries/product/getProduct";
import { RootState } from "@/store/store";

//interfaces
import { IParams } from "@/interfaces/params.interfaces";

//styles
import * as Styled from "./ProductPage.styles";

//components
import Section from "@/components/section/Section";
import SectionLoading from "@/components/loading/section/SectionLoading";

const Product = () => {
  const router = useRouter();
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const { slug } = router.query as IParams;
  const { product, productError, productLoading } = GetProduct(slug);

  if (productLoading) return <SectionLoading />;
  if (productError) return null;
  if (!product) return null;

  return (
    <Section>
      <Link href="/" passHref>
        <Styled.ShopBackLink>powrót do sklepu</Styled.ShopBackLink>
      </Link>
      <Styled.ProductContainer>
        <Styled.ShopItemImageContainer>
          <Styled.ShopItemImageWrapper>
            <Image
              src={product.img.url}
              layout="fill"
              objectFit="cover"
              alt="ebookcommerce-product"
              // width={500}
              // height={600}
            />
            {product.salePrice && (
              <Styled.ShopSalePrice>
                <p>promocja</p>
              </Styled.ShopSalePrice>
            )}
          </Styled.ShopItemImageWrapper>
        </Styled.ShopItemImageContainer>
        <Styled.ShopItemDescriptionWrapper>
          <h1>{product.title}</h1>
          {product.salePrice ? (
            <Styled.DescriptionSalePrice>
              <h2>{product.salePrice} zł</h2>
              <h3>{product.price} zł</h3>
            </Styled.DescriptionSalePrice>
          ) : (
            <h2>{product.price} zł</h2>
          )}
          {product.description && (
            <Styled.ProductContent>
              {documentToReactComponents(product.description, renderOptions)}
            </Styled.ProductContent>
          )}

          {/* <AddToCartButton
            disabled={getProductCart(sys.id)}
            color="primary"
            variant="contained"
            onClick={() => addToCart(product)}
          >
            <AddShoppingCart />
            Dodaj do koszyka
          </AddToCartButton> */}
        </Styled.ShopItemDescriptionWrapper>
      </Styled.ProductContainer>
    </Section>
  );
};

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <Styled.EmbeddImage whileHover={{ scale: 1.05 }}>
          <Image
            width={400}
            height={400}
            objectFit="contain"
            src={node.data.target.fields.file.url}
            quality={40}
            alt="ebookcommerce-product"
          ></Image>
        </Styled.EmbeddImage>
      );
    },
  },
};

export default Product;
