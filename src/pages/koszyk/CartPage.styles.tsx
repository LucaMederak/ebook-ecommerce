import styled, { css } from "styled-components";

const CartWrapper = styled.section(
  ({
    theme: {
      typography: { fontSize, fontWeight },
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    padding: 8rem 2rem;
    display: flex;
    flex-direction: column;
    max-width: ${breakpoints.xl};
    margin: auto;
    width: 100%;
    min-height: 75vh;
    position: relative;
    gap: 2rem;
    background: ${palette.common.main};

    ${up(breakpoints.lg)} {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
    }
  `
);

const CartItemsWrapper = styled.ul(
  ({
    theme: {
      typography: { fontSize, fontWeight },
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    gap: 1rem;

    h2 {
      font-size: ${fontSize.xl};
      font-weight: ${fontWeight.bold};
      color: ${palette.common.heading};
      margin-bottom: 2rem;
    }
  `
);

const CartItem = styled.li(
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
    justify-content: space-between;
    gap: 4rem;
    width: 100%;
    padding: 0.5rem 0;
    border-bottom: 0.1rem solid ${palette.common.contrast};
    border-top: 0.1rem solid ${palette.common.contrast};

    h4 {
      font-size: ${fontSize.m};
      font-weight: ${fontWeight.bold};
      color: ${palette.common.heading};
    }

    ${up(breakpoints.lg)} {
      width: 50rem;
    }
  `
);

const CartItemTitle = styled.div(
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
    justify-content: flex-start;
    gap: 3rem;

    h3 {
      font-size: ${fontSize.m};
      font-weight: ${fontWeight.light};
      color: ${palette.common.heading};
    }
  `
);

const CartItemQuantity = styled.span(
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

const OrderSummaryWrapper = styled.div(
  ({
    theme: {
      typography: { fontSize, fontWeight },
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    position: sticky;
    top: 2rem;
    right: 2rem;
    min-height: 40rem;
    width: 100%;
    padding: 4rem;
    border-radius: 0.8rem;
    box-shadow: ${palette.common["box-shadow"]};

    h2 {
      font-size: ${fontSize.xl};
      font-weight: ${fontWeight.bold};
      color: ${palette.common.heading};
    }

    ${up(breakpoints.lg)} {
      width: 40rem;
    }
  `
);

const OrderSummaryTotalPrice = styled.div(
  ({
    theme: {
      typography: { fontSize, fontWeight },
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
  }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;
    width: 100%;

    p {
      font-size: ${fontSize.m};
      font-weight: ${fontWeight.light};
      color: ${palette.common.heading};
    }

    h3 {
      font-size: ${fontSize.m};
      font-weight: ${fontWeight.bold};
      color: ${palette.common.heading};
    }
  `
);

export {
  CartWrapper,
  CartItemsWrapper,
  CartItem,
  CartItemTitle,
  CartItemQuantity,
  OrderSummaryWrapper,
  OrderSummaryTotalPrice,
};
