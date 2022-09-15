import React from "react";
import { IOfferItemProps } from "./Offer.interfaces";

import * as Styled from "./Offer.styles";

const Offer = ({ title, description, icon }: IOfferItemProps) => {
  return (
    <Styled.OfferItemWrapper>
      <span>{icon}</span> <h2>{title}</h2> <p>{description}</p>
    </Styled.OfferItemWrapper>
  );
};

export default Offer;
