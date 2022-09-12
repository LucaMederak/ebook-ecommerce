import React from "react";
import { useCartAlert } from "@/context/CartAlert";
import Image from "next/image";

//styles
import * as Styled from "./CartAlert.styles";

const CartAlert = () => {
  const { cartAlert } = useCartAlert();
  if (!cartAlert.display) return null;

  return (
    <Styled.CartAlertWrapper>
      <Styled.ImageWrapper>
        <Image
          src={cartAlert.productImg}
          layout="fill"
          objectFit="cover"
          alt="ebookcommerce-product-img"
        />
      </Styled.ImageWrapper>
      <Styled.CartAlertContentWrapper>
        <h2>{cartAlert.title}</h2>
        <Styled.CartAlertProduct>
          <h3>{cartAlert.productName}</h3>
          <p>{cartAlert.productPrice} zł</p>
        </Styled.CartAlertProduct>
      </Styled.CartAlertContentWrapper>
    </Styled.CartAlertWrapper>
  );
};

export default CartAlert;
