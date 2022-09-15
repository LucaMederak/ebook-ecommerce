import React, { useEffect } from "react";

import * as Styled from "./Heading.styles";
import { IChildrenProps } from "@/interfaces/children.interfaces";
import { IHeadingProps } from "./Heading.interfaces";

//animation
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { fadeAnimation, fadeItem } from "@/animations/fade";
import { useInView } from "react-intersection-observer";

const Heading = ({
  title,
  description,
  children,
  align = "left",
}: IHeadingProps & IChildrenProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("show");
    } else {
      animation.start("hidden");
    }
  }, [inView, animation]);

  return (
    <Styled.HeadingWrapper
      align={align}
      variants={fadeAnimation}
      animate={animation}
      initial="hidden"
      ref={ref}
    >
      {children}
      <motion.h1 variants={fadeItem}>{title}</motion.h1>
      <motion.p variants={fadeItem}>{description}</motion.p>
    </Styled.HeadingWrapper>
  );
};

export default Heading;
