import { IChildrenProps } from "@/interfaces/children.interfaces";
import React from "react";

import * as Styled from "./Info.styles";

const Info = ({ children }: IChildrenProps) => {
  return <Styled.InfoWrapper>{children}</Styled.InfoWrapper>;
};

export default Info;
