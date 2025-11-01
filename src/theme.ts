import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1976d2" }, // Azul Material
    background: {
      default: "#0d1117", // Fondo general oscuro
      paper: "#161b22", // Fondo de tarjetas
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },

});

export default theme;
