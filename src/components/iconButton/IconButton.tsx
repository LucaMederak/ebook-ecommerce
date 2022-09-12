import React, { ReactElement } from "react";

//interfaces
import { IIconButtonProps } from "./IconButton.interfaces";

//styles
import * as Styled from "./IconButton.styles";

const IconButton = ({
  children,
  variant = "addToCart",
  onClick,
}: IIconButtonProps) => {
  return (
    <Styled.IconButtonWrapper variant={variant} onClick={onClick}>
      {children}
    </Styled.IconButtonWrapper>
  );
};

export default IconButton;
