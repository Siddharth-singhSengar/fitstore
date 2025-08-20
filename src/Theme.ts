import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: { fontWeight: 700, fontSize: "2rem" },
  },
});

export default theme;
