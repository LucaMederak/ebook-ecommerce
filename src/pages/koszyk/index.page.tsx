import React from "react";
import Image from "next/image";
import * as Styled from "./CartPage.styles";

//store
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "@/store/cart";

//components
import PayPal from "./components/PayPal";
import Section from "@/components/section/Section";
import Stripe from "./components/stripe/Stripe";

const Cart = () => {
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);

  if (items.length < 1)
    return (
      <Styled.CartWrapper>
        <p>brak produktów w koszyku</p>
      </Styled.CartWrapper>
    );

  return (
    <Section>
      <Styled.CartWrapper>
        <Styled.CartItemsWrapper>
          <h2>Produkty w koszyku</h2>

          {items.map((item) => (
            <Styled.CartItem key={item.id}>
              <Styled.CartItemTitle>
                <Image
                  src={item.imageUrl}
                  alt="ebookcommerce"
                  width={100}
                  height={100}
                  objectFit="contain"
                />

                <h3>{item.title}</h3>
                <Styled.CartItemQuantity>
                  {item.quantity} szt.
                </Styled.CartItemQuantity>
              </Styled.CartItemTitle>

              <h4>{item.totalPrice} zł</h4>
            </Styled.CartItem>
          ))}
        </Styled.CartItemsWrapper>
        <Styled.OrderSummaryWrapper>
          <h2>Podsumowanie</h2>
          <Styled.OrderSummaryTotalPrice>
            <p>Razem do zapłaty</p>
            <h3>{totalPrice} zł</h3>
          </Styled.OrderSummaryTotalPrice>
          <Stripe />
          <PayPal />
        </Styled.OrderSummaryWrapper>
      </Styled.CartWrapper>
    </Section>
  );
};

export default Cart;
