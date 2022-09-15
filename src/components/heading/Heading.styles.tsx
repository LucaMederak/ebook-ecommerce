import styled, { css } from "styled-components";
import { IHeadingProps } from "./Heading.interfaces";
import { motion } from "framer-motion";

const HeadingWrapper = styled(motion.div)<Pick<IHeadingProps, "align">>(
  ({
    theme: {
      palette,
      typography: { fontSize, fontWeight },
      layout: { border },
    },
    align,
  }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    margin: 2rem 0;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 5rem 0;

    h1 {
      font-size: ${fontSize.xl};
      font-weight: ${fontWeight.bold};
      color: ${palette.common.heading};
      margin-bottom: 0.5rem;
      letter-spacing: 0.05rem;
    }

    p {
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.light};
      color: ${palette.common.heading};
      margin-bottom: 0.5rem;
      letter-spacing: 0.05rem;
    }

    ${align === "center" &&
    css`
      align-items: center;
      justify-content: center;

      h1 {
        text-align: center;
      }

      p {
        text-align: center;
      }
    `}
  `
);

export { HeadingWrapper };
