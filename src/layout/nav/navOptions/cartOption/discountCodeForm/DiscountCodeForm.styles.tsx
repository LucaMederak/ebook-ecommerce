import styled, { css } from "styled-components";

const DiscountWrapper = styled.div(
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
    border-bottom: 0.1rem solid whitesmoke;
    padding-bottom: 1.5rem;
  `
);

interface IDiscountFormOpen {
  active: boolean;
}

const DiscountOpenButton = styled.div<IDiscountFormOpen>(
  ({
    theme: {
      typography: { fontSize, fontWeight },
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
    active,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.light};
      color: ${palette.common.heading};
      transition: 0.3s ease-out;
    }

    :hover {
      span {
        svg {
          path {
            fill: ${palette.primary.main};
          }
        }
      }
      h3 {
        color: ${palette.primary.main};
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.4rem;
      height: 2.4rem;
      transition: 0.3s ease-out;

      svg {
        width: 80%;
        height: 80%;
        path {
          fill: ${palette.common.grey};
        }
      }
    }

    ${active &&
    css`
      h3 {
        color: ${palette.primary.main};
      }
      span {
        transform: rotate(180deg);

        svg {
          path {
            fill: ${palette.primary.main};
          }
        }
      }
    `}
  `
);

const DiscountContentForm = styled.form(
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
    margin: 1.5rem 0;

    input {
      flex: 1;
      border: 0.1rem solid ${palette.common.contrast};
      height: 4rem;
      border-radius: 0.5rem 0 0 0.5rem;
      padding: 0 1rem;
      font-size: 1.3rem;
      font-weight: 400;
      color: ${palette.common.heading};
      transition: 0.3s ease-out;
      background: transparent;

      :focus {
        border: 0.1rem solid lightGrey;
        outline: none;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 4rem;
      padding: 1rem 0;
      border-radius: 0 0.5rem 0.5rem 0;
      background: ${palette.primary.main};
      color: white;
      font-size: 1.2rem;
      font-weight: 500;
      flex: 0.5;
      border: none;
      cursor: pointer;
      transition: 0.3s ease-out;

      :disabled {
        pointer-events: none;
        background: ${palette.primary.light};
      }
      :hover {
        background: ${palette.primary.active};
      }
    }
  `
);

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  position: relative;
`;

const DiscountCodeSaleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background: rgba(39, 174, 96, 0.08);
  padding: 1.5rem;
  border-radius: 0.5rem;
  p {
    font-size: 1.3rem;
    font-weight: 500;
    color: #00bf51;
  }
  svg {
    width: 2rem;
    height: 2rem;
    path {
      fill: #00bf51;
    }
  }
`;

interface IAlertType {
  type: "success" | "error" | "";
}

const DiscountAlertWrapper = styled.div<IAlertType>(
  ({
    theme: {
      typography: { fontSize, fontWeight },
      palette,
      layout: { padding, border },
      media: { down, up, breakpoints },
    },
    type,
  }) => css`
    position: absolute;
    top: 5rem;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    z-index: 10;
    p {
      font-size: 1.3rem;
      font-weight: 500;
      color: white;
    }
    svg {
      width: 2rem;
      height: 2rem;
      path {
        fill: #00bf51;
      }
    }

    ${type === "success" &&
    css`
      background: #00bf51;
    `}
    ${type === "error" &&
    css`
      background: red;
    `}
  `
);

export {
  DiscountWrapper,
  DiscountOpenButton,
  DiscountContentForm,
  LoadingWrapper,
  DiscountCodeSaleWrapper,
  DiscountAlertWrapper,
};
