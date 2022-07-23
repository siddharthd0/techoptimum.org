import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    secondary: "#1B76FF",
    primary: "#A7B2FF",
    bgColor: "#060E17",
    secondaryButton: {
      500: "#333333",
      600: "#303030", // you need this
    },
    footerBg: "#0D132F",
    inputBg: "#0A0F24",
    buttonBg: {
      500: "#4559E9",
      600: "#4559E9",
    }
  },
  fonts: {
    body: "'Neue Machina', sans-serif",
    heading: "'Neue Machina', sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Neue Machina",
        color: "white",
        backgroundColor: "bgColor",
        padding: 0,
        margin: 0,
      },

      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "secondary",
        borderRadius: "50px",
      },
    }),
  },
});

export default theme;
