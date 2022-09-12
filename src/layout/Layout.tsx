import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

//animations
import { AnimatePresence } from "framer-motion";

//components
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Burger from "./nav/burger/Burger";
import CartAlert from "@/components/cartAlert/CartAlert";

//interfaces
import { IChildrenProps } from "@/interfaces/children.interfaces";

//hooks
import { usePageBlur } from "@/context/PageBlur";

//styles
import * as Styled from "./Layout.styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "@/theme/theme";

//context
import { useDarkMode } from "@/context/DarkMode";
import { useCartAlert } from "@/context/CartAlert";

const Layout = ({ children }: IChildrenProps) => {
  const { darkMode } = useDarkMode();
  const { pageBlur } = usePageBlur();
  const { cartAlert } = useCartAlert();
  const [burgerOpen, setBurgerOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (burgerOpen) {
      return router.events.on("routeChangeComplete", () =>
        setBurgerOpen(false)
      );
    }
  }, [burgerOpen, router?.events]);

  const theme = darkMode ? darkTheme : defaultTheme;

  if (router?.pathname === "/404" || router?.pathname.includes("konto")) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {burgerOpen && <Burger setBurgerOpen={setBurgerOpen} />}
        <Nav setBurgerOpen={setBurgerOpen} />
        <Styled.PageWrapper>
          <AnimatePresence>
            {pageBlur && (
              <Styled.PageBlur
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
          <CartAlert />
          {children}
        </Styled.PageWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
