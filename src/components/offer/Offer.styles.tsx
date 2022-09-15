import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const OfferItemWrapper = styled.div(
  ({
    theme: {
      typography: { fontSize, fontWeight },
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 0.4rem;
      background: ${palette.primary.light};

      svg {
        width: 2rem;
        height: 2rem;
        path {
          fill: ${palette.primary.main};
        }
      }
    }

    h2 {
      font-size: ${fontSize.l};
      font-weight: ${fontWeight.bold};
      color: ${palette.common.heading};
      text-align: center;
    }
    p {
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.light};
      color: ${palette.common.heading};
      text-align: center;
      max-width: 30rem;
    }
  `
);

export { OfferItemWrapper };
