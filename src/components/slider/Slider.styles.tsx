import styled, { css } from "styled-components";
import { motion } from "framer-motion";

interface ISwitch {
  activeSwitch: boolean;
}

const SliderWrapper = styled.div(
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
    min-height: 45rem;
    position: relative;
    border-radius: 0.8rem;
  `
);

const ImageWrapper = styled(motion.div)(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    width: 100%;
    min-height: 45rem;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.8rem;

    img {
      border-radius: 0.8rem;
    }
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
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${palette.common.gradient};
    padding: 8rem 4rem;
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

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 2rem;
      background: ${palette.primary.main};
      border: 0.4rem;
      width: 20rem;
      color: white;
      font-size: 1.5rem;
      font-weight: ${typography.fontWeight.medium};
      text-decoration: none;
      transition: 0.3s ease-out;
      :hover {
        opacity: 0.8;
      }
    }

    ${down(breakpoints.lg)} {
      padding: 8rem ${padding.lg};
    }

    ${down(breakpoints.md)} {
      padding: 8rem ${padding.md};
    }

    ${down(breakpoints.sm)} {
      padding: 8rem ${padding.sm};
    }

    ${down(breakpoints.xs)} {
      padding: 4rem ${padding.xs};
    }
  `
);

const SwitchContainer = styled.div(
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
    justify-content: center;
    flex-direction: column;
    position: absolute;
    right: 4rem;

    ${down(breakpoints.sm)} {
      display: none;
    }
  `
);

const Switch = styled.div<ISwitch>(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
    activeSwitch,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    transition: 0.3s ease-out;

    :hover {
      background: ${palette.primary.light};
    }

    button {
      width: 1.7rem;
      height: 1.7rem;
      background: ${activeSwitch ? palette.primary.main : "transparent"};
      border: 0.1rem solid ${palette.primary.main};
      border-radius: 50%;
      cursor: pointer;
    }
  `
);

export {
  SliderWrapper,
  ImageWrapper,
  CategoryInfoWrapper,
  SwitchContainer,
  Switch,
};
