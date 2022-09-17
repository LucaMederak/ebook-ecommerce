import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//hooks
import { usePageBlur } from "@/context/PageBlur";

//styles
import { NavOptionWrapper } from "../NavOption.styles";
import * as Styled from "./CartOption.styles";

import * as Icon from "@/icons/icons";

//components
import NavOptionPopup from "../NavOptionPopup";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import IconButton from "@/components/iconButton/IconButton";
import DiscountCodeForm from "./discountCodeForm/DiscountCodeForm";

//store
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "@/store/cart";

const CartOption = () => {
  const router = useRouter();
  const { totalPrice, items, regularTotalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  const [discountAlert, setDiscountAlert] = useState({
    display: false,
    type: "", //success, error
    msg: "",
  });

  const [cartPopup, setCartPopup] = useState(false);
  const { showPageBlur, deletePageBlur } = usePageBlur();

  const handlePopup = () => {
    if (cartPopup) {
      setCartPopup(false);
      deletePageBlur();
    } else {
      setCartPopup(true);
      showPageBlur();
    }
  };

  useEffect(() => {
    if (discountAlert.display) {
      const timer = setTimeout(
        () => setDiscountAlert({ display: false, type: "", msg: "" }),
        3000
      );
      return () => {
        clearTimeout(timer);
      };
    }
  }, [discountAlert.display]);

  return (
    <NavOptionWrapper onMouseEnter={handlePopup} onMouseLeave={handlePopup}>
      <Icon.FaShoppingCart />
      <Styled.CartItemsInfo>{items.length}</Styled.CartItemsInfo>
      <AnimatePresence>
        {cartPopup && (
          <NavOptionPopup>
            {items.length < 1 && (
              <Styled.EmptyCartWrapper>
                <h1>Twój koszyk jest pusty</h1>
              </Styled.EmptyCartWrapper>
            )}

            {items.length > 0 && (
              <>
                <Styled.CartItemsContainer>
                  <h1>Koszyk</h1>
                  {items.map(
                    ({
                      id,
                      title,
                      price,
                      imageUrl,
                      salePrice,
                      regularPrice,
                      quantity,
                      totalPrice: productTotalPrice,
                      discountCode: productDiscountCode,
                    }) => (
                      <Styled.CartItemWrapper key={id}>
                        <Image
                          width={100}
                          height={100}
                          objectFit="contain"
                          src={imageUrl}
                          alt="ebookcommerce-cart-product"
                        />

                        <Styled.CartItemContentWrapper>
                          <Styled.CartHeadingWrapper>
                            <h1>{title}</h1>
                            <Styled.DeleteIconWrapper
                              // variant="deleteFromCart"
                              onClick={() => dispatch(removeCartItem(id))}
                            >
                              <Icon.FaTrash />
                            </Styled.DeleteIconWrapper>
                          </Styled.CartHeadingWrapper>

                          <Styled.CartPriceWrapper>
                            <h2>{productTotalPrice} zł</h2>
                            {regularPrice * quantity !== productTotalPrice && (
                              <h3>{regularPrice * quantity} zł</h3>
                            )}
                            <Styled.CartQuantity>
                              {quantity} szt.
                            </Styled.CartQuantity>
                          </Styled.CartPriceWrapper>
                          {productDiscountCode && (
                            <Styled.DiscountCodeProductSaleWrapper>
                              <p>kod rabatowy: {productDiscountCode.name}</p>
                              <p>- {productDiscountCode.procent}%</p>
                            </Styled.DiscountCodeProductSaleWrapper>
                          )}
                        </Styled.CartItemContentWrapper>
                      </Styled.CartItemWrapper>
                    )
                  )}
                </Styled.CartItemsContainer>
                <DiscountCodeForm />

                <Styled.TotalPriceContainer>
                  <div>
                    <p>Razem do zapłaty:</p>{" "}
                    <span>
                      <h2>{totalPrice} zł</h2>
                      {regularTotalPrice !== totalPrice && (
                        <h3>{regularTotalPrice} zł</h3>
                      )}
                    </span>
                  </div>

                  <Styled.OrderCartButton
                    color="primary"
                    onClick={() => router.push("/koszyk")}
                  >
                    Przejdź do zamówienia
                  </Styled.OrderCartButton>
                </Styled.TotalPriceContainer>
              </>
            )}
          </NavOptionPopup>
        )}
      </AnimatePresence>
    </NavOptionWrapper>
  );
};

export default CartOption;
