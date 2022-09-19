import React from "react";

//interfaces
import { IChildrenProps } from "@/interfaces/children.interfaces";

//styles
import * as Styled from "./PageNavInfo.styles";

const PageNavInfo = ({ children }: IChildrenProps) => {
  return <Styled.PageNavInfoWrapper>{children}</Styled.PageNavInfoWrapper>;
};

export default PageNavInfo;
