import styled, { css } from "styled-components";

interface IActiveCategory {
  active: boolean;
}

const NavCategoryItem = styled.div<IActiveCategory>(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
    active,
  }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background: ${palette.common.contrast}; */
    /* border: 0.1rem solid ${palette.common.contrast}; */
    border-radius: ${border.main};
    transition: 0.3s ease-out;
    /* position: relative; */

    /* min-height: 5rem; */
    flex: 1;
    cursor: pointer;

    a {
      font-size: 1.5rem;
      font-weight: ${typography.fontWeight.medium};
      color: ${palette.common.paragraph};
      text-decoration: none;
      :hover {
        color: ${palette.primary.main};
      }

      position: relative;
    }

    ${active &&
    css`
      .link {
        display: flex;
        flex-direction: column;
        color: ${palette.primary.main};
        ::after {
          content: "";
          height: 0.15rem;
          width: 100%;
          background: ${palette.primary.main};
          margin-top: 0.5rem;
          position: absolute;
          top: 100%;
        }
      }
    `}

    ${down(breakpoints.lg)} {
      font-size: clamp(1.2rem, 1.2vw, 1.4rem);
    }
  `
);

export { NavCategoryItem };
