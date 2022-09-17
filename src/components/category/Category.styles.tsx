import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const CategoryWrapper = styled(motion.div)(
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
    background: ${palette.common.main};
    border-radius: 0.8rem;
    transition: all 0.3s ease-out;
    border: 0.1rem solid ${palette.common.contrast};
    position: relative;
    cursor: pointer;
    height: 30rem;

    img {
      border-radius: 0.8rem;
    }

    :hover {
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
    }
  `
);

const CategoryImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 0.8rem;

  img {
    border-radius: 0.8rem;
  }
`;

const CategoryTitleWrapper = styled.div(
  ({
    theme: {
      typography: { fontSize, fontWeight },
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: #00000050;
    border-radius: 0.8rem;
    transition: 0.3s ease-out;

    :hover {
      background: #00000021;
    }

    h2 {
      font-size: ${fontSize.xl};
      font-weight: ${fontWeight.medium};
      color: white;
      margin-bottom: 1rem;
      margin-top: 2rem;
    } //category name
  `
);

const ProductPriceWrapper = styled.div(
  ({
    theme: {
      typography: { fontSize, fontWeight },
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    z-index: 2;

    h1 {
      font-size: ${fontSize.m};
      font-weight: ${fontWeight.light};
      color: ${palette.common.heading};
      margin-bottom: 1rem;
      margin-top: 2rem;
    } //product_name
  `
);

const ProductPrice = styled.div(
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

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    h2 {
      font-size: 2.6rem;
      font-weight: 800;
      color: ${palette.common.heading};
    } //price || sale_price

    h3 {
      font-size: 2.1rem;
      font-weight: 400;
      color: ${palette.common.heading};
      text-decoration: line-through;
      margin-left: 1.5rem;
    } //price_through

    button {
      margin-left: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background: ${palette.primary.main};
      transition: 0.3s ease-out;

      :disabled {
        background: ${palette.primary.light};
        pointer-events: none;
      }

      :hover {
        background: ${palette.primary.active};
      }

      svg {
        width: 1.6rem;
        height: 1.6rem;
        path {
          fill: white;
        }
      }
    }
  `
);

const ProductDescriptionWrapper = styled(motion.div)(
  ({
    theme: {
      typography: { fontSize, fontWeight },
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    /* transition: 0.3s ease-out; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    padding-top: 10rem;
    padding-bottom: 18rem;
    padding-left: 4rem;
    padding-right: 4rem;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 0%,
      #ffffff 77.53%
    );

    p {
      text-align: center;
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.medium};
      color: ${palette.common.heading};
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
    }

    a {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 1.3rem;
      border-radius: 0.4rem;
      color: white;
      font-size: 1.3rem;
      font-weight: 500;
      transition: 0.3s ease-out;
      background: ${palette.primary.main};
      text-decoration: none;

      :hover {
        opacity: 0.7;
      }
    }
  `
);

const ProductSalePrice = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background: red;

  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
  }
`;

export {
  CategoryWrapper,
  CategoryImageWrapper,
  CategoryTitleWrapper,
  ProductPriceWrapper,
  ProductPrice,
  ProductDescriptionWrapper,
  ProductSalePrice,
};
