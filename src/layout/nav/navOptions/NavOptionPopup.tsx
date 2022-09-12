import React from "react";
import { IChildrenProps } from "@/interfaces/children.interfaces";

//styles
import * as Styled from "./NavOption.styles";

const NavOptionPopup = ({ children }: IChildrenProps) => {
  return (
    <Styled.NavOptionPopupContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <span className="popup-span" />
      <Styled.NavOptionPopupContentWrapper>
        {children}
      </Styled.NavOptionPopupContentWrapper>
    </Styled.NavOptionPopupContainer>
  );
};

export default NavOptionPopup;
