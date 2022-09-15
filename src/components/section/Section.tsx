import React from "react";
import { IChildrenProps } from "@/interfaces/children.interfaces";

import * as Styled from "./Section.styles";

const Section = ({ children }: IChildrenProps) => {
  return (
    <Styled.Container>
      <Styled.SectionWrapper>{children}</Styled.SectionWrapper>
    </Styled.Container>
  );
};

export default Section;
