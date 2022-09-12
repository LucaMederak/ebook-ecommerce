import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const CartAlertWrapper = styled(motion.div)(
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
    justify-content: flex-start;
    gap: 2rem;
    border-radius: 0.8rem;
    border: 0.1rem solid ${palette.common.contrast};
    box-shadow: ${palette.common["box-shadow"]};
    z-index: 50;
    padding: 2rem;
    width: 100%;
    right: 0;
    position: fixed;
    top: 18rem;

    background: ${palette.common.main};

    ${up(breakpoints.sm)} {
      width: 40rem;
      right: 4rem;
    }
  `
);

const ImageWrapper = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    width: 4rem;
    height: 4rem;
    position: relative;
    border-radius: 50%;
  `
);

const CartAlertContentWrapper = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h2 {
      font-size: ${typography.fontSize.xs};
      font-weight: ${typography.fontWeight.light};
      color: ${palette.common.heading};
    }
  `
);

const CartAlertProduct = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: flex-start;

    h3 {
      font-size: ${typography.fontSize.l};
      font-weight: ${typography.fontWeight.bold};
      color: ${palette.common.heading};
    }

    p {
      font-size: ${typography.fontSize.m};
      font-weight: ${typography.fontWeight.bold};
      color: ${palette.common.heading};
    }
  `
);

export {
  CartAlertWrapper,
  ImageWrapper,
  CartAlertContentWrapper,
  CartAlertProduct,
};
