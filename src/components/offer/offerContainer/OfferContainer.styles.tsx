import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const OfferContainer = styled.div(
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
    gap: 6rem;
    flex-wrap: wrap;
    padding: 8rem 4rem;

    background: rgba(190, 225, 195, 0.06);
    border: 0.1rem solid rgba(190, 225, 195, 0.301);
    border-radius: 0.8rem;
  `
);

export { OfferContainer };
