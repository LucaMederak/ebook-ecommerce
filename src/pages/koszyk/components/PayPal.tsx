import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CreateOrderActions, OnApproveActions } from "@paypal/paypal-js";

//store
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "@/store/cart";

const initialOptions = {
  "client-id": process.env.PAYPAL_SANDBOX_CLIENT_ID as string,
  currency: "PLN",
  intent: "capture",
  // "data-client-token": "abc123xyz==",
};

export default function PayPal() {
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);

  const createPayPalOrder = (
    data: Record<string, unknown>,
    actions: CreateOrderActions
  ) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice.toString(),
          },
        },
      ],
    });
  };

  const onPayPalApprove = async (
    data: Record<string, unknown>,
    actions: OnApproveActions
  ) => {
    const order = await actions.order?.capture();

    const name = order?.payer.name?.given_name;
    alert(`Transaction completed by ${name}`);
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => createPayPalOrder(data, actions)}
        onApprove={(data, actions) => onPayPalApprove(data, actions)}
      />
    </PayPalScriptProvider>
  );
}
