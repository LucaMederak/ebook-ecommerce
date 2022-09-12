import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const BurgerOverlay = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.12);
  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  z-index: 4;
`;

const BurgerContent = styled(motion.div)(
  ({ theme: { palette } }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50rem;
    min-height: 100vh;
    background: ${palette.common.main};
    padding: 12rem 5rem;
  `
);

const Close = styled.button(
  ({ theme: { palette } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-out;
    position: absolute;
    right: 3rem;
    top: 3rem;

    svg {
      width: 100%;
      height: 100%;

      path {
        fill: ${palette.common.grey};
      }
    }
  `
);

const BurgerLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 100%;
  gap: 3rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    a {
      text-decoration: none;
      color: black;
      font-size: 2rem;
      font-weight: 500;
      font-family: "Sora", sans-serif;
      transition: 0.3s ease-out;

      :hover {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

const BurgerSocial = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export { BurgerOverlay, BurgerContent, Close, BurgerLinks, BurgerSocial };
