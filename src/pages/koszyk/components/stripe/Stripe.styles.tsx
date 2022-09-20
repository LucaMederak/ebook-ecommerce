import styled, { css } from "styled-components";

const StripeButton = styled.button(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 1.5rem 0;
    border-radius: ${border.main};
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: ${typography.fontWeight.medium};
    transition: 0.3s ease-out;
    gap: 2rem;
    border: none;
    background: blueviolet;
    padding: 1rem 2rem;

    :hover {
      opacity: 0.8;
    }

    svg {
      width: 6rem;
      height: 3rem;
      path {
        fill: white;
      }
    }
  `
);

export { StripeButton };
