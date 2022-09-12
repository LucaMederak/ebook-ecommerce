import styled, { css } from "styled-components";

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    background: ${theme.palette.common.main};
    transition: 0.3s ease-out;
    z-index: 2;
  `
);

const NavWrapper = styled.header(
  ({
    theme: {
      typography,
      palette,
      layout: { padding },
      media: { down, up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 7rem;
    background: ${palette.common.main};
    transition: 0.3s ease-out;
    border-bottom: 0.1rem solid ${palette.common.contrast};
    padding: 1.5rem ${padding.xs};
    flex-wrap: wrap;
    gap: 1.4rem;
    position: relative;
    max-width: ${breakpoints.xl};
    margin: auto;

    /* ${up(breakpoints.xs)} {
      padding: 1.5rem ${padding.sm};
    } */
  `
);

const NavSearchWrapper = styled.div(
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
    justify-content: space-between;
    gap: 1rem;
    width: 40rem;
    order: 3;
    width: 100%;
    position: relative;

    ${up(breakpoints.md)} {
      width: 40rem;
      order: 2;
    }
  `
);

const NavSearch = styled.div(
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
    height: 3.8rem;

    input {
      width: 100%;
      height: 100%;
      border: none;
      background: transparent;
      outline: none;
      padding: 0 1rem;
      background: ${palette.common.contrast};
      transition: 0.3s ease-out;
      border-radius: ${border.main} 0 0 ${border.main};
      color: ${palette.common.heading};

      :hover {
        opacity: 0.8;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 100%;
      background: ${palette.primary.main};
      border: none;
      border-radius: 0 ${border.main} ${border.main} 0;
      /* cursor: pointer;
      transition: 0.3s ease-out;

      :hover {
        opacity: 0.7;
      } */

      svg {
        width: 1.5rem;
        height: 1.5rem;
        path {
          fill: white;
        }
      }
    }
  `
);

const NavOptionsWrapper = styled.div(
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
    justify-content: flex-end;
    order: 2;
    gap: 1rem;

    ${up(breakpoints.md)} {
      order: 3;
      gap: 2rem;
    }
  `
);

const Burger = styled.button(
  ({
    theme: {
      palette,
      layout: { border },
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${palette.primary.main};
    border-radius: ${border.main};
    height: 3.8rem;
    width: 3.8rem;
    border: none;

    svg {
      width: 60%;
      height: 60%;
      path {
        fill: white;
      }
    }

    ${up(breakpoints.md)} {
      display: none;
    }
  `
);

export {
  Container,
  NavWrapper,
  NavSearchWrapper,
  NavSearch,
  NavOptionsWrapper,
  Burger,
};
