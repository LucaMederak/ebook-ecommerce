import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const ProductsContainer = styled(motion.div)(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    width: 100%;
    grid-gap: 4rem;
    padding: 4rem 0;

    ${up(breakpoints.sm)} {
      grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    }
  `
);

export { ProductsContainer };
