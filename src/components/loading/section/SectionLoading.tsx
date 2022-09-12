import React from "react";

//styles
import * as Styled from "./SectionLoading.styles";

//components
import ReactLoading from "react-loading";

const SectionLoading = () => {
  return (
    <Styled.SectionLoadingWrapper>
      <ReactLoading type="spin" color="green" height={"5rem"} width={"5rem"} />
    </Styled.SectionLoadingWrapper>
  );
};

export default SectionLoading;
