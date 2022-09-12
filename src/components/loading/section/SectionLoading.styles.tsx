import styled, { css } from "styled-components";

const SectionLoadingWrapper = styled.div(
  ({
    theme: {
      palette,
      layout: { border },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${palette.common.main};
    min-height: 50rem;
    width: 100%;
    border: 0.1rem solid ${palette.common.contrast};
  `
);

export { SectionLoadingWrapper };
