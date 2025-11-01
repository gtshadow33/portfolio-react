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
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          },
        },
      },
    },
  },
});

export default theme;
