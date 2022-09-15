import { IChildrenProps } from "@/interfaces/children.interfaces";
import React from "react";

import * as Styled from "./OfferContainer.styles";

const OfferContainer = ({ children }: IChildrenProps) => {
  return <Styled.OfferContainer>{children}</Styled.OfferContainer>;
};

export default OfferContainer;
