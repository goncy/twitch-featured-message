import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: {
      ...theme.colors.purple,
      500: "#5C16C5",
    },
    secondary: {
      ...theme.colors.yellow,
      500: "#EAD30A",
    },
    dark: {
      900: "#181818",
      800: "#1F1F23",
      700: "#222226",
    },
    light: {
      100: "#f9f9f9",
      200: "#F5F5F5",
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
    mono: "Menlo, monospace",
  },
  styles: {
    global: {
      "html, body, #__next": {
        height: "100%",
        maxHeight: "100vh",
        backgroundColor: "light.200",
        overflow: "hidden",
        _dark: {
          backgroundColor: "dark.900",
        },
      },
    },
  },
  semanticTokens: {
    colors: {
      primary: "primary.500",
      secondary: "secondary.500",
      content: {
        default: "white",
        _dark: "dark.800",
      },
      solid: {
        default: "black",
        _dark: "white",
      },
      soft: {
        default: "blackAlpha.800",
        _dark: "whiteAlpha.800",
      },
      translucid: {
        default: "blackAlpha.200",
        _dark: "whiteAlpha.200",
      },
    },
  },
});
