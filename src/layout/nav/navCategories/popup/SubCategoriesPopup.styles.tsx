import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const SubCategoriesPopupWrapper = styled(motion.div)(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    min-height: 18rem;
    border-radius: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: -10;
    box-shadow: ${palette.common["box-shadow"]};

    display: flex;
    justify-content: space-between;
    gap: 1rem;
    background: ${palette.common.main};
    border-radius: ${border.main};
    padding: 4rem ${padding.lg};
    padding-top: 10rem;

    ${down(breakpoints.lg)} {
      padding: 4rem ${padding.lg};
    }
  `
);

const AllListWrapper = styled.div(
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
    gap: 2rem;
    flex-wrap: wrap;
  `
);

const SubCategoriesListWrapper = styled.ul(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;

    h1 {
      color: ${palette.common.heading};
      font-size: ${typography.fontSize.xl};
      font-weight: ${typography.fontWeight.bold};
    }

    h2 {
      color: ${palette.common.heading};
      font-size: ${typography.fontSize.l};
      font-weight: ${typography.fontWeight.bold};
    }

    .more_info {
      color: ${palette.primary.main};
      font-size: ${typography.fontSize.xs};
      font-weight: ${typography.fontWeight.medium};
      text-decoration: underline;
      transition: 0.3s ease-out;
      transition: 0.3s ease-out;
      :hover {
        opacity: 0.8;
      }
    }
  `
);

const ListItem = styled.li(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    a {
      color: ${palette.common.heading};
      font-size: ${typography.fontSize.xs};
      font-weight: ${typography.fontWeight.light};
      text-decoration: none;
      transition: 0.3s ease-out;
      :hover {
        color: ${palette.primary.main};
      }
    }
  `
);

export {
  SubCategoriesPopupWrapper,
  AllListWrapper,
  SubCategoriesListWrapper,
  ListItem,
};
