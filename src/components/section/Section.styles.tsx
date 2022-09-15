import styled, { css } from "styled-components";

const Container = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    width: 100%;
    background: ${palette.common.main};
    padding: 4rem 2rem;

    ${up(breakpoints.md)} {
      padding: 6rem 4rem;
    }
  `
);

const SectionWrapper = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    width: 100%;
    max-width: ${breakpoints.xl};
    margin: auto;
  `
);

export { Container, SectionWrapper };
