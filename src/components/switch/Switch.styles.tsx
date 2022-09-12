import styled, { css } from "styled-components";

interface ISwitchActive {
  active: boolean;
}

const SwitchWrapper = styled.div(
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
    justify-content: flex-start;
    width: 6rem;
    min-height: 2.8rem;
    border-radius: 2rem;
    background: ${palette.common.contrast};
    position: relative;
    cursor: pointer;
  `
);

const Switch = styled.div<ISwitchActive>(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
    active,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0.7rem;
    width: 2rem;
    height: 2rem;
    background: ${palette.common.main};
    transition: 0.3s ease-out;
    border-radius: 50%;

    svg {
      width: 60%;
      height: 60%;
      path {
        fill: ${palette.common.grey};
      }
    }

    ${active &&
    css`
      transform: translateX(26px);
      svg {
        path {
          fill: ${palette.primary.main};
        }
      }
    `}
  `
);

export { SwitchWrapper, Switch };
