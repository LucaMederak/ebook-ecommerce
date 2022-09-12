import { IChildrenProps } from "@/interfaces/children.interfaces";
import React, {
  createContext,
  useContext,
  FC,
  useState,
  useMemo,
  useEffect,
} from "react";

interface ICartAlert {
  cartAlert: ICartAlertState;
  handleCartAlert: (
    display: boolean,
    title: string,
    productName: string,
    productPrice: number,
    productImg: string
  ) => void;
}

interface ICartAlertState {
  display: boolean;
  title: string;
  productName: string;
  productPrice: number;
  productImg: string;
}

const CartAlertContext = createContext<ICartAlert | null>(null);

export const useCartAlert = () => {
  const cartAlert = useContext(CartAlertContext);
  if (!cartAlert) {
    throw new Error("Cart alert context is not available");
  }
  return cartAlert;
};

export const CartAlertProvider = ({ children }: IChildrenProps) => {
  const [cartAlert, setCartAlert] = useState<ICartAlertState>({
    display: false,
    title: "",
    productName: "",
    productPrice: 0,
    productImg: "",
  });

  useEffect(() => {
    if (cartAlert.display) {
      const timer = setTimeout(
        () =>
          setCartAlert({
            display: false,
            title: "",
            productName: "",
            productPrice: 0,
            productImg: "",
          }),
        2000
      );
      return () => {
        clearTimeout(timer);
      };
    }
  }, [cartAlert.display]);

  const contextValue = useMemo(
    () => ({
      cartAlert: cartAlert,
      handleCartAlert: (
        display: boolean,
        title: string,
        productName: string,
        productPrice: number,
        productImg: string
      ) =>
        setCartAlert({
          display: display,
          title: title,
          productName: productName,
          productPrice: productPrice,
          productImg: productImg,
        }),
    }),
    [cartAlert, setCartAlert]
  );

  return (
    <CartAlertContext.Provider value={contextValue}>
      {children}
    </CartAlertContext.Provider>
  );
};
