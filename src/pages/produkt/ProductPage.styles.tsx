import styled from "styled-components";
import { motion } from "framer-motion";

const ShopBackLink = styled.a`
  display: flex;
  align-items: center;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.5rem;
    transition: 0.3s ease-out;
  }

  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.common.heading};
  transition: 0.3s ease-out;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary.main};

    svg {
      transform: translateX(-0.5rem);
    }
  }
`;

const ProductContainer = styled.div`
  margin-top: 4rem;
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    margin-top: 2rem;
  }
`;

const ShopItemImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 65rem;
  width: 50rem;
  padding: 3rem;
  border-radius: 1rem;

  background: rgba(231, 240, 255, 0.2);
  transition: 0.3s ease-out;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 50rem;
    padding: 0;
  }
`;

const ShopItemImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    border-radius: 1rem;
  }
`;

const ShopSalePrice = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  background: red;

  p {
    font-size: 1.4rem;
    font-weight: 500;
    color: white;
  }
`;

const ShopItemDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10rem;

  a {
    margin-top: 4rem;
    width: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    border: 0.2rem solid ${({ theme }) => theme.palette.primary.main};
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.primary.main};
    transition: 0.3s ease-out;
    :hover {
      opacity: 0.7;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.common.heading};
    margin-bottom: 1rem;
    margin-top: 2rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.common.heading};
    margin-bottom: 1rem;
    margin-top: 2rem;
  }

  @media (max-width: 1400px) {
    margin-left: 5rem;
    width: 50rem;
  }

  @media (max-width: 1000px) {
    margin-left: 0;
    width: 100%;
    padding: 1rem;
  }

  @media (max-width: 400px) {
    a {
      width: 100%;
    }
  }
`;

const DescriptionSalePrice = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 2.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.common.heading};
    text-decoration: line-through;
    margin-left: 1.5rem;
  } //price_through
`;

const AddToCartButton = styled.button`
  /* width: 100%; */
  width: 30rem;
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

  :disabled {
    background: ${({ theme }) => theme.palette.primary.light};
    pointer-events: none;
  }

  :hover {
    opacity: 0.8;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const ProductContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 70rem;
  margin-top: 4rem;

  h2 {
    font-size: 3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.common.heading};
    padding: 1rem 0;
  }
  h3 {
    font-size: 2.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.common.heading};
    padding: 1rem 0;
  }
  h4 {
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.common.heading};
    padding: 1rem 0;
  }
  p {
    font-size: 1.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.common.heading};
    padding: 1rem 0;
    /* text-align: justify; */
  }
  ul {
    list-style: disc;
    li {
      font-size: 2rem;
      color: ${({ theme }) => theme.palette.common.heading};
    }
  }

  @media (max-width: 1400px) {
    width: 50rem;
  }

  @media (max-width: 1200px) {
    width: 40rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 1rem;
  }

  @media (max-width: 450px) {
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;

    h2 {
      font-size: 2.6rem;
    }
    p {
      font-size: 1.6rem;
      max-width: 100%;
    }
  }
`;

const EmbeddImage = styled(motion.div)`
  /* width: 100%; */
  /* height: 40rem; */
  border-radius: 2rem;
  position: relative;
  background: transparent;
  margin: 2rem 0;
  box-shadow: 0px 4px 29px #dfdfdf;
  transition: all 0.3s ease-out;
  cursor: pointer;
  :hover {
    box-shadow: 0px 10px 40px #dfdfdf;
  }

  img {
    border-radius: 2rem;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export {
  ProductContainer,
  ProductContent,
  ShopBackLink,
  ShopItemDescriptionWrapper,
  DescriptionSalePrice,
  AddToCartButton,
  ShopItemImageContainer,
  ShopSalePrice,
  EmbeddImage,
  ShopItemImageWrapper,
};
