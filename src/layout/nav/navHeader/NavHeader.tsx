import React from "react";

//styles
import * as Styled from "./NavHeader.styles";

//icons
import * as Icon from "@/icons/icons";

const NavHeader = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderDeliveryWrapper>
        <Styled.HeaderItem>
          <Icon.FaTruck />
          <p>Darmowa dostawa od 100zł</p>
        </Styled.HeaderItem>
      </Styled.HeaderDeliveryWrapper>
      <Styled.HeaderInfoWrapper>
        <Styled.HeaderItem>
          <Icon.FaClock />
          <p>pon-pt: 8:00-16.00</p>
        </Styled.HeaderItem>
        <Styled.HeaderItem>
          <Icon.FaPhone />
          <p>000 000 000</p>
        </Styled.HeaderItem>
      </Styled.HeaderInfoWrapper>
    </Styled.HeaderWrapper>
  );
};

export default NavHeader;
