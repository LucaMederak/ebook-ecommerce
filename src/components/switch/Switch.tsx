import React from "react";
import * as Styled from "./Switch.styles";

//icons
import * as Icon from "@/icons/icons";

//interfaces
import { ISwitchProps } from "./Switch.interfaces";

const Switch = ({ active, setActive }: ISwitchProps) => {
  return (
    <Styled.SwitchWrapper onClick={() => setActive(!active)}>
      <Styled.Switch active={active}>
        {active ? <Icon.FaMoon /> : <Icon.FaSun />}
      </Styled.Switch>
    </Styled.SwitchWrapper>
  );
};

export default Switch;
