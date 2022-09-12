import styled, { css } from "styled-components";

const FooterContainer = styled.footer(
  ({
    theme: {
      palette,
      layout: { padding },
      media: { down, breakpoints },
    },
  }) => css`
    width: 100%;
    background: ${palette.common.contrast};
    border-top: 0.1rem solid ${palette.common.contrast};
  `
);

const FooterContentWrapper = styled.nav(
  ({
    theme: {
      palette,
      layout: { padding },
      typography: { fontSize, fontWeight },
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: ${breakpoints.xl};
    margin: auto;
    padding: 2rem;

    p {
      font-size: 1.4rem;
      font-weight: ${fontWeight.medium};
      color: ${palette.primary.main};
      text-transform: uppercase;
      letter-spacing: 0.05rem;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 2rem;
      text-decoration: none;
      font-size: 1.4rem;
      font-weight: ${fontWeight.medium};
      color: ${palette.primary.main};
      border: 0.1rem solid ${palette.primary.main};
      border-radius: 0.4rem;
      letter-spacing: 0.05rem;
      transition: 0.3s ease-out;
      max-width: 30rem;

      :hover {
        background: ${palette.primary.main};
        color: white;
      }
    }

    ${up(breakpoints.sm)} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  `
);

export { FooterContainer, FooterContentWrapper };
