import React, { useState, useEffect } from "react";

//styles
import { NavOptionWrapper } from "../NavOption.styles";
import * as Styled from "./ThemeOption.styles";

//icons
import * as Icon from "@/icons/icons";

//hooks

import { usePageBlur } from "@/context/PageBlur";

//components
import NavOptionPopup from "../NavOptionPopup";
import Switch from "@/components/switch/Switch";
import { AnimatePresence } from "framer-motion";

//context
import { useDarkMode } from "@/context/DarkMode";

const ThemeOption = () => {
  const { darkMode, handleDarkMode } = useDarkMode();
  const [themePopup, setThemePopup] = useState(false);
  const { showPageBlur, deletePageBlur } = usePageBlur();

  const handlePopup = () => {
    if (themePopup) {
      setThemePopup(false);
      deletePageBlur();
    } else {
      setThemePopup(true);
      showPageBlur();
    }
  };

  return (
    <NavOptionWrapper onMouseEnter={handlePopup} onMouseLeave={handlePopup}>
      <Icon.FaSun />
      <AnimatePresence>
        {themePopup && (
          <NavOptionPopup>
            <Styled.ThemeWrapper>
              <p>Motyw</p>
              <Switch active={darkMode} setActive={handleDarkMode} />
            </Styled.ThemeWrapper>
          </NavOptionPopup>
        )}
      </AnimatePresence>
    </NavOptionWrapper>
  );
};

export default ThemeOption;
