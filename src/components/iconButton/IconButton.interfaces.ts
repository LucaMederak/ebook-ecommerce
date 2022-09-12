import { ReactElement } from "react";

export interface IIconButtonProps {
  children: ReactElement;
  variant?: "info" | "addToCart" | "deleteFromCart";
  onClick?: () => void;
}
