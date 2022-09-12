import styled from "styled-components";
import { motion } from "framer-motion";

const PageWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const PageBlur = styled(motion.div)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #00000055;
  z-index: 1;
`;

export { PageWrapper, PageBlur };
