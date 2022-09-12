import styled, { css } from "styled-components";

const SearchPopupWrapper = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    position: absolute;
    top: 100%;
    width: 50%;
    max-height: 60rem;
    gap: 6rem;
    overflow-y: auto;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    background: ${palette.common.main};
    padding: 2rem 4rem;
    padding-top: 5.5rem;

    ${down(breakpoints.lg)} {
      width: 80%;
    }

    ${down(breakpoints.md)} {
      width: 100%;
    }
  `
);

const DataItemProductInfoWrapper = styled.div(
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
    gap: 2.5rem;
    border-bottom: 0.2rem solid ${palette.common.contrast};
    padding: 1rem 0;
    width: 100%;

    ${down(breakpoints.xs)} {
      flex-direction: column;
      align-items: flex-start;
    }
  `
);

const ItemWrapper = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    gap: 2rem;

    ${down(breakpoints.xs)} {
      flex-direction: column;
    }
  `
);

const DataItemProductInfo = styled.div(
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
    gap: 0.5rem;
    flex: 1;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 2rem;
      border-radius: ${border.main};
      background: ${palette.common.contrast};
      font-size: ${typography.fontSize.xs};
      font-weight: ${typography.fontWeight.medium};
      color: ${palette.common.paragraph};
      width: 15rem;
    }

    h1 {
      font-size: ${typography.fontSize.xl};
      font-weight: ${typography.fontWeight.bold};
      color: ${palette.common.heading};
    }
  `
);

const DataItemProductActions = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 1.5rem;

    ${down(breakpoints.xs)} {
      align-items: flex-start;
    }
  `
);

const Price = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    width: 100%;

    h2 {
      font-size: ${typography.fontSize.l};
      font-weight: ${typography.fontWeight.bold};
      color: ${palette.common.heading};
    }
  `
);

const ImageWrapper = styled.div(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    position: relative;
    height: 7rem;
    width: 7rem;
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
  `
);

const BrakingSearchResultWrapper = styled.div(
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
    padding: 2rem 0;

    h2 {
      font-size: ${typography.fontSize.xl};
      font-weight: ${typography.fontWeight.bold};
      color: ${palette.common.heading};
    }

    ${down(breakpoints.sm)} {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 2rem;
    }
  `
);

const ClosePopup = styled.button(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    position: fixed;
    right: 2rem;
    top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background: rgba(255, 0, 0, 0.12);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-out;

    :hover {
      opacity: 0.8;
    }

    svg {
      width: 60%;
      height: 60%;
      path {
        fill: red;
      }
    }
  `
);

export {
  SearchPopupWrapper,
  DataItemProductInfo,
  DataItemProductActions,
  Price,
  ImageWrapper,
  ClosePopup,
  BrakingSearchResultWrapper,
  DataItemProductInfoWrapper,
  ItemWrapper,
};
