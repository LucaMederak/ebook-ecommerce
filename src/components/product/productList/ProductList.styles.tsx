import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const ProductList = styled(motion.div)(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: 4rem;
    background: ${palette.common.main};
    width: 100%;
    max-width: ${breakpoints.xl};
    margin: auto;
    padding: 4rem 2rem;
  `
);

const EmptyProductCategory = styled(motion.div)(
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
    justify-content: space-between;
    width: 100%;
    padding: 10rem ${padding.xl};
    background: ${palette.common.main};
    gap: 4rem;

    h2 {
      font-size: ${typography.fontSize.xl};
      font-weight: ${typography.fontWeight.bold};
      color: ${palette.common.heading};
    }

    ${down(breakpoints.lg)} {
      padding: 8rem ${padding.lg};
    }

    ${down(breakpoints.md)} {
      padding: 8rem ${padding.md};
    }

    ${down(breakpoints.sm)} {
      padding: 8rem ${padding.sm};
      flex-direction: column;
      h2 {
        text-align: center;
        font-size: ${typography.fontSize.l};
      }
    }

    ${down(breakpoints.xs)} {
      padding: 8rem ${padding.xs};
    }
  `
);

export { ProductList, EmptyProductCategory };
