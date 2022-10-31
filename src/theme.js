import { createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#50B8E7",
    },
    secondary: {
      main: "#FF9966",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: grey[700],
      secondary: grey[800],
      third: grey[700],
      border: grey[200],
      mainGrey: "#FCFCFC",
    },
  },
});

export default theme;
