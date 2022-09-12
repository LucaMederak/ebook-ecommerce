import styled, { css } from "styled-components";

const NavCategoriesWrapper = styled.div(
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
    justify-content: space-between;
    /* gap: 1rem; */
    background: ${palette.common.main};
    transition: 0.3s ease-out;
    min-height: 5rem;
    z-index: -1;
    padding: 1.2rem ${padding.xl};

    ${down(breakpoints.lg)} {
      padding: 1.2rem ${padding.lg};
    }

    ${down(breakpoints.md)} {
      display: none;
    }
  `
);

const NavCategoryItem = styled.div(
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
    background: ${palette.common.contrast};
    border: 0.4rem solid ${palette.common.main};
    border-radius: ${border.main};
    transition: 0.3s ease-out;
    min-height: 5rem;
    flex: 1;
    font-size: 1.4rem;
    font-weight: ${typography.fontWeight.medium};
    color: ${palette.common.paragraph};
    cursor: pointer;
    z-index: 7;

    :hover {
      color: ${palette.primary.main};
    }

    ${down(breakpoints.lg)} {
      font-size: clamp(1.2rem, 1.2vw, 1.4rem);
    }
  `
);

export { NavCategoriesWrapper, NavCategoryItem };
