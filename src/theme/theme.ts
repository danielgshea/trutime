import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(
  createTheme({
    spacing: 4,
    typography: {
      fontFamily: ["Roboto", "Raleway", "Open Sans"].join(","),
      h1: {
        fontSize: "5rem",
        fontFamily: "Raleway",
      },
      h2: {
        fontSize: "3.5rem",
        fontFamily: "Open Sans",
        fontStyle: "bold",
      },
      h3: {
        fontSize: "2.5rem",
        fontFamily: "Roboto",
      },
    },
    palette: {
      background: {
        default: "#231942", // Russian Violet
        paper: "#EDEDE9",
      },
      primary: {
        main: "#5E548E", // Ultra Violet
        dark: "#9F86C0",
        light: "#BE95C4",
      },
      secondary: {
        main: "#9F86C0", // African Violet
        dark: "#BE95C4", // Lilac
        light: "#E0B1CB", // Pink Lavender
      },
      error: {
        main: "#BE95C4", // Lilac
      },
      warning: {
        main: "#E0B1CB", // Pink Lavendar
      },
      info: {
        main: "#6B7D6A", // gray
      },
      success: {
        main: "#339900", //green
      },
      text: {
        primary: "#201E1F", // real pleasant black
        secondary: "#FEFFFE", // real pleasing white
        third: "#F3E0EC", // light pink ish
        disabled: "",
      },
    },
  })
);

export default theme;
