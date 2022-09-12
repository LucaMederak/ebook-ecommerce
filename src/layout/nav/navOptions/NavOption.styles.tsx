import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const NavOptionWrapper = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s ease-out;

    svg {
      width: 60%;
      height: 60%;
      z-index: 1;
      path {
        fill: ${palette.common.grey};
      }
    }
  `
);

const NavOptionPopupContainer = styled(motion.div)(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    position: absolute;
    top: 0;
    right: -0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background: transparent;

    .popup-span {
      background: ${palette.common.main};
      border-radius: ${border.main} ${border.main} 0 0;
      width: 5rem;
      height: 5rem;
      box-shadow: 0px -2px 4px rgba(188, 188, 188, 0.25);
      display: none;
    }

    ${up(breakpoints.sm)} {
      .popup-span {
        display: block;
      }
    }
  `
);

const NavOptionPopupContentWrapper = styled(motion.div)(
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
    gap: 2rem;
    padding: ${padding.xs};
    background: ${palette.common.main};
    box-shadow: 0px 14px 10px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 10rem;
    left: 0;
    width: 100%;
    border-radius: 0;
    z-index: 1;

    ${up(breakpoints.sm)} {
      position: static;
      min-width: 40rem;
      border-radius: ${border.main} 0 ${border.main} ${border.main};
    }
  `
);

export {
  NavOptionWrapper,
  NavOptionPopupContainer,
  NavOptionPopupContentWrapper,
};
