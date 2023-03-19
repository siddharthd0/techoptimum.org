import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#A7B2FF",
    secondary: "#1B76FF",
    bgColor: "#060E17",
    primaryButton: {
      500: "#1B76FF",
      600: "#1469F0", // 600: "Hover Color"
    },
    secondaryButton: {
      500: "#333333",
      600: "#2A2A2A",
    },
    footerBg: "#0D132F",
    inputBg: "#0A0F24",
    buttonBg: {
      500: "#4559E9",
      600: "#3244CA",
    },
    joinTeamBtn: {
      500: "#4A7EAE",
      600: "#4A7EAE",
    },
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
     /*  "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "secondary",
        borderRadius: "50px",
      }, */
    }),
  },
});

export default theme;
