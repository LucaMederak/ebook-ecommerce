import styled, { css } from "styled-components";

const InfoWrapper = styled.div(
  ({
    theme: {
      palette,
      typography: { fontSize, fontWeight },
      layout: { border },
    },
  }) => css`
    display: flex;
    align-items: center;

    justify-content: center;
    background: ${palette.primary.light};
    padding: 0.6rem 1rem;
    border-radius: 0.4rem;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: ${fontWeight.light};
    color: ${palette.primary.main};

    letter-spacing: 0.05rem;
  `
);

export { InfoWrapper };
