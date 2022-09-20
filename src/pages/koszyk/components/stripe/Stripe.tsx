import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { FaStripe } from "@/icons/icons";
import * as Styled from "./Stripe.styles";
import axios from "axios";

//store
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "@/store/cart";

//components
import Spinner from "@/components/loading/spinner/Spinner";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE as string);

interface IOrderItem {
  id: string;
  quantity: number;
}

const Stripe = () => {
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);
  const [loading, setLoading] = useState(false);

  const handleStripeOrder = () => {
    const cartItems = items.map(({ id, quantity }) => ({
      id,
      quantity,
    }));

    handleOrder(cartItems);
  };

  const handleOrder = async (cartItems: IOrderItem[]) => {
    setLoading(true);
    const data = {
      cartItems: cartItems,
    };
    try {
      const stripeResp = await axios.post(`/api/order`, data);
      console.log(stripeResp);

      const { sessionId } = await stripeResp.data;
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        console.log(error);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <Styled.StripeButton onClick={handleStripeOrder} disabled={loading}>
      {loading ? <Spinner /> : <FaStripe />}
    </Styled.StripeButton>
  );
};

export default Stripe;
