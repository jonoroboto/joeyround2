// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors: {
    hotPink: {
      50: "#F6D6FF",
      100: "#F6AFFF",
      200: "#FF79FF",
      300: "#FF48EA",
      400: "#FF20C9",
      500: "#FF00A8",
      600: "#EC008A",
      700: "#C20067",
      800: "#77003A",
      900: "#330018",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
