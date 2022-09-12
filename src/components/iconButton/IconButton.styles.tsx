import styled, { css } from "styled-components";

import { IIconButtonProps } from "./IconButton.interfaces";

const IconButtonWrapper = styled.button<Pick<IIconButtonProps, "variant">>(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
    variant,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-out;

    :hover {
      opacity: 0.8;
    }

    svg {
      width: 40%;
      height: 40%;
    }

    ${variant === "info" &&
    css`
      background: ${palette.common.contrast};
      svg {
        path {
          fill: ${palette.common.paragraph};
        }
      }
    `}

    ${variant === "addToCart" &&
    css`
      background: ${palette.primary.light};
      svg {
        path {
          fill: ${palette.primary.main};
        }
      }

      :hover {
        background: ${palette.primary.main};
        svg {
          path {
            fill: white;
          }
        }
      }
    `}

    ${variant === "deleteFromCart" &&
    css`
      width: 3rem;
      height: 3rem;
      background: ${palette.common.contrast};
      svg {
        path {
          fill: ${palette.common.grey};
        }
      }
    `}
  `
);

export { IconButtonWrapper };
