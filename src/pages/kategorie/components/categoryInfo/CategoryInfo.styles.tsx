import styled, { css } from "styled-components";
import { motion } from "framer-motion";

interface ISwitch {
  activeSwitch: boolean;
}

const ImageWrapper = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40rem;
    position: relative;
  `
);

const CategoryInfoWrapper = styled(motion.div)(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    min-height: 40rem;
    position: absolute;
    top: 0;
    left: 0;
    background: ${palette.common.gradient};
    padding: 8rem 2rem;
    gap: 3rem;

    h1 {
      font-size: ${typography.fontSize.xxl};
      font-weight: ${typography.fontWeight.bold};
      color: ${palette.primary.main};
    }

    p {
      font-size: ${typography.fontSize.m};
      font-weight: ${typography.fontWeight.light};
      color: ${palette.common.paragraph};
      width: 60%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    ${down(breakpoints.xs)} {
      padding: 4rem ${padding.xs};
    }
  `
);

export { ImageWrapper, CategoryInfoWrapper };
