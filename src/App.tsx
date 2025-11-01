import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Link,
  CircularProgress,
  Grid
} from "@mui/material";
import RepoCards, { type Repo } from "./components/Cards";
import Info from "./components/info";

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/gtshadow33/repos");
        const data = await res.json();
        setRepos(data.filter((repo: Repo) => !repo.fork));
      } catch (error) {
        console.error("Error al obtener repos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "primary.main",
          boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Portafolio de gtshadow33
          </Typography>
          <Button
            color="inherit"
            component={Link}
            href="mailto:gtshadow33@gmail.com"
            sx={{
              textTransform: "none",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 2,
            }}
          >
            📧 Contactar
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: "relative",
          py: 12,
          textAlign: "center",
          color: "white",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            “El código es arte, y el arte es evolución constante.”
          </Typography>
          <Typography
            variant="h6"
            sx={{
              opacity: 0.95,
              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            Muchas gracias a todos por su apoyo — cada proyecto es un paso más 
          </Typography>
        </Box>
      </Box >
      <Box sx={{ position: "relative", zIndex: 1 }}>
      <Info />
      </Box>

<Container sx={{ mt: 6, mb: 6 }}>
  <Typography
    variant="h4"
    gutterBottom
    align="center"
    sx={{ fontWeight: "bold", mb: 4 }}
  >
    Mis proyectos públicos en GitHub
  </Typography>

  {loading ? (
    <Box display="grid" justifyContent="center" mt={8}>
      <CircularProgress />
    </Box>
  ) : (
    <Grid container spacing={3} justifyContent="center">
      <RepoCards repos={repos} />
    </Grid>
  )}
</Container>


      <Box
        component="footer"
        sx={{
          py: 3,
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} gtshadow33 —{" "}
          <Link
            href="mailto:gtshadow33@gmail.com"
            color="inherit"
            underline="hover"
          >
            gtshadow33@gmail.com
          </Link>
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Disponible para colaboraciones y nuevos proyectos
        </Typography>
      </Box>
    </>
  );
}

export default App;
