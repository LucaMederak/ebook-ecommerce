import styled, { css } from "styled-components";

const HeaderWrapper = styled.header(
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
    background: ${palette.primary.light};
    transition: 0.3s ease-out;
    padding: 0.8rem ${padding.xs};

    p {
      font-size: clamp(1rem, 3.5vw, 1.3rem);
      font-weight: ${typography.fontWeight.medium};
      color: ${palette.primary.main};
    }

    ${up(breakpoints.xs)} {
      padding: 0.8rem ${padding.sm};
    }

    ${up(breakpoints.sm)} {
      padding: 0.8rem ${padding.md};
    }

    ${up(breakpoints.md)} {
      padding: 0.8rem ${padding.lg};
    }

    ${up(breakpoints.lg)} {
      padding: 0.8rem ${padding.xl};
      p {
        font-size: ${typography.fontSize.xs};
      }
    }
  `
);

const HeaderDeliveryWrapper = styled.div(
  ({
    theme: {
      media: { down, up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;

    ${up(breakpoints.md)} {
      display: block;
    }
  `
);

const HeaderInfoWrapper = styled.div(
  ({
    theme: {
      media: { down, up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    justify-content: space-between;

    ${up(breakpoints.md)} {
      width: auto;
      justify-content: flex-end;
    }
  `
);

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    path {
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export { HeaderWrapper, HeaderDeliveryWrapper, HeaderInfoWrapper, HeaderItem };
