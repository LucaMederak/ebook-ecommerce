import styled, { css } from "styled-components";

const ThemeWrapper = styled.div(
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
    gap: 2rem;

    p {
      font-size: ${typography.fontSize.s};
      font-weight: ${typography.fontWeight.medium};
      color: ${palette.common.paragraph};
    }
  `
);

export { ThemeWrapper };
