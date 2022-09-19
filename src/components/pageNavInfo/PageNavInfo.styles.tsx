import styled, { css } from "styled-components";

const PageNavInfoWrapper = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: ${breakpoints.xl};
    margin: auto;
    width: 100%;
    background: ${palette.common.main};
    padding: 2rem;

    a {
      font-size: ${typography.fontSize.s};
      font-weight: ${typography.fontWeight.medium};
      color: ${palette.common.heading};
      text-decoration: none;
      transition: 0.3s ease-out;
      :last-child {
        color: ${palette.primary.main};
      }

      :hover {
        opacity: 0.8;
      }
    }

    svg {
      width: 1rem;
      height: 1rem;
      path {
        fill: ${palette.common.grey};
      }
    }
  `
);

export { PageNavInfoWrapper };
