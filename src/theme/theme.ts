import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  palette: {
    primary: {
      main: "#04B900",
      light: "rgba(0, 210, 34, 0.08)",
      active: "#04B900",
    },
    secondary: {
      main: "#202730",
      active: "#1F2830",
    },
    disabled: "rgba(255, 168, 0, 0.20)",
    common: {
      main: "white",
      contrast: "#F8F8F8",
      grey: "#E5E5E5",
      heading: "#263656",
      paragraph: "rgba(0, 0, 0, 0.51)",
      background: "#fafafa",
      "box-shadow": "0px 4px 22px rgba(172, 172, 172, 0.26)",
      linearGradient:
        "linear-gradient(180deg,rgba(255, 255, 255, 0.9) 0%,#ffffff 77.53%)",
      gradient:
        "radial-gradient(33.52% 329.87% at 64.61% 53.91%, rgba(255, 255, 255, 0) 0.33%, rgba(255, 255, 255, 0.91) 82.55%, #FFFFFF 100%)",
    },
  },
  media: {
    up: (breakpoint, vertical = false) =>
      `@media (min-${
        vertical ? "height" : "width"
      }: calc(${breakpoint} + 0.02px))`,
    down: (breakpoint, vertical = false) =>
      `@media (max-${vertical ? "height" : "width"}: ${breakpoint})`,

    breakpoints: {
      xs: "400px", //extra-small
      sm: "600px", //small
      md: "800px", //medium
      lg: "1200px", //large
      xl: "1536px", //extra large
    },
  },
  typography: {
    fontSize: {
      xs: "1.5rem",
      s: "1.6rem",
      m: "1.8rem",
      l: "2rem",
      xl: "2.6rem",
      xxl: "4.5rem",
    },
    fontWeight: {
      light: 400,
      medium: 500,
      bold: 600,
      extraBold: 900,
    },
  },
  layout: {
    padding: {
      xs: "2rem", //extra-small
      sm: "4rem", //small
      md: "8rem", //medium
      lg: "10rem", //large
      xl: "25rem", //extra large
    },
    border: {
      main: "0.4rem",
    },
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      ...defaultTheme.palette.primary,
    },
    secondary: {
      ...defaultTheme.palette.secondary,
      main: "#181A20",
    },
    common: {
      ...defaultTheme.palette.common,
      main: "#181A20",
      grey: "#b7bdc6",
      contrast: "#3E4045",
      heading: "white",
      paragraph: "#b7bdc6",
      background: "black",
      linearGradient:
        "linear-gradient(180deg,rgba(41, 41, 41, 0.9) 0%,#222222 77.53%)",
      gradient:
        "radial-gradient(33.52% 329.87% at 64.61% 53.91%, rgba(24, 26, 32, 0) 0.33%, rgba(24, 26, 32, 0.89) 82.55%, #181A20 100%)",
      "box-shadow": "0px 4px 22px #000000;",
    },
  },
};
