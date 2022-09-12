import Link from "next/link";
import React from "react";

//styles
import * as Styled from "./Footer.styles";

const Footer = () => {
  return (
    <Styled.FooterContainer>
      <Styled.FooterContentWrapper>
        <p>copyright © 2022 ebookcommerce</p>
        <Link href="/polityka-prywatnosci">
          <a>polityka prywatności</a>
        </Link>
      </Styled.FooterContentWrapper>
    </Styled.FooterContainer>
  );
};

export default Footer;
