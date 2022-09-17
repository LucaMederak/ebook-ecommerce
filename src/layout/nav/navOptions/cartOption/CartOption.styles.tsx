import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const CartItemsInfo = styled.span(
  ({ theme: { typography, palette } }) => css`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background: ${palette.primary.main};
    color: white;
    font-size: 1rem;
    font-weight: ${typography.fontWeight.medium};
    z-index: 2;
    padding: 0.2rem;
  `
);

const EmptyCartWrapper = styled.div(
  ({ theme: { typography, palette } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem;
    /* min-height: 20rem; */

    h1 {
      font-size: ${typography.fontSize.s};
      font-weight: ${typography.fontWeight.medium};
      color: ${palette.common.heading};
    }

    svg {
      width: 3rem;
      height: 3rem;

      path {
        fill: ${palette.primary.main};
      }
    }
  `
);

const CartItemsContainer = styled.ul(
  ({
    theme: {
      palette,
      typography: { fontSize, fontWeight },
    },
  }) => css`
    list-style: none;
    gap: 2rem;
    max-height: 55rem;
    overflow-y: auto;

    h1 {
      font-size: ${fontSize.m};
      font-weight: ${fontWeight.bold};
      color: ${palette.common.heading};
    }
  `
);

const CartItemWrapper = styled.li(
  ({ theme: { typography, palette } }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 4rem 2rem 2rem 0;

    border-bottom: 0.1rem solid ${palette.common.contrast};
  `
);

const CartItemContentWrapper = styled.li(
  ({ theme: { typography, palette } }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;

    p {
      font-size: ${typography.fontSize.xs};
      font-weight: ${typography.fontWeight.light};
      color: ${palette.common.heading};
    }
  `
);

const CartHeadingWrapper = styled.div(
  ({ theme: { typography, palette } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    h1 {
      font-size: ${typography.fontSize.m};
      font-weight: ${typography.fontWeight.medium};
      color: ${palette.common.heading};
    }
  `
);

const CartPriceWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 2rem;

    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      color: ${theme.palette.common.heading};
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 400;
      color: ${({ theme }) => theme.palette.common.heading};
      text-decoration: line-through;
      margin-left: 1rem;
    }
  `
);

const CartQuantity = styled.span(
  ({
    theme: {
      typography,
      palette,
      layout: { border },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    border-radius: ${border.main};
    background: ${palette.primary.light};
    font-size: 1.2rem;
    font-weight: ${typography.fontWeight.light};
    color: ${palette.primary.main};
  `
);

const ImageSvgWrapper = styled.div(
  ({ theme: { palette } }) => css`
    width: 10rem;
    height: 10rem;

    svg {
      width: 100%;
      height: 100%;
      path {
        fill: ${palette.common.contrast};
      }
    }
  `
);

const TotalPriceContainer = styled.div(
  ({
    theme: {
      palette,
      typography,
      layout: { border },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      p {
        font-size: ${typography.fontSize.s};
        font-weight: ${typography.fontWeight.light};
        color: ${palette.common.heading};
      }

      span {
        display: flex;
      }

      h2 {
        font-size: ${typography.fontSize.m};
        font-weight: ${typography.fontWeight.medium};
        color: ${palette.common.heading};
      }

      h3 {
        font-size: ${typography.fontSize.m};
        font-weight: ${typography.fontWeight.medium};
        color: ${palette.common.heading};
        text-decoration: line-through;
        margin-left: 1rem;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 1rem;
      border-radius: ${border.main};
      color: white;
      font-size: ${typography.fontSize.s};
      font-weight: ${typography.fontWeight.medium};
      transition: 0.3s ease-out;
      background: ${palette.primary.main};
      text-decoration: none;

      :hover {
        opacity: 0.8;
      }
    }
  `
);

const OrderCartButton = styled.button`
  width: 100%;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.primary.main};
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  margin: 1.5rem 0;
  transition: 0.3s ease-out;

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1.5rem;
  }

  :hover {
    opacity: 0.8;
  }
`;

const DeleteIconWrapper = styled.button`
  /* display: flex; */
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  transition: 0.3s ease-out;
  background: transparent;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.palette.common.contrast};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    path {
      fill: ${({ theme }) => theme.palette.common.grey};
    }
  }
`;

const DiscountCodeProductSaleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background: rgba(39, 174, 96, 0.08);
  padding: 0.8rem;
  border-radius: 0.5rem;
  p {
    font-size: 1rem;
    font-weight: 500;
    color: #00bf51;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    path {
      fill: #00bf51;
    }
  }
`;

export {
  CartItemsInfo,
  CartItemWrapper,
  CartItemContentWrapper,
  CartQuantity,
  CartHeadingWrapper,
  CartPriceWrapper,
  EmptyCartWrapper,
  ImageSvgWrapper,
  TotalPriceContainer,
  CartItemsContainer,
  OrderCartButton,
  DeleteIconWrapper,
  DiscountCodeProductSaleWrapper,
};
