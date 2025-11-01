import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  Link,
  CircularProgress,
} from "@mui/material";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  fork: boolean;
  language: string | null;
  description?: string | null;
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/gtshadow33/repos")
      .then((res) => res.json())
      .then((data: Repo[]) => {
        setRepos(data.filter((repo) => !repo.fork));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener repos:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* 🔹 Barra superior */}
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

      {/* 🔹 Sección inspiradora con imagen de fondo */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          py: 12,
          textAlign: "center",
          color: "white",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
            Muchas gracias a todos por su apoyo — cada proyecto es un paso más 🚀
          </Typography>
        </Box>
      </Box>

      {/* 🔹 Contenido principal */}
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
          <Box display="flex" justifyContent="center" mt={8}>
            <CircularProgress />
          </Box>
        ) : (
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
          >
            {repos.map((repo) => (
              <Card
                key={repo.id}
                sx={{
                  width: 240,
                  height: "auto",
                  minHeight: 160,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 1.5,
                  borderRadius: 2,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.04)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: 1 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {repo.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      lineHeight: 1.3,
                      fontSize: "0.85rem",
                    }}
                  >
                    {repo.description || "Proyecto sin descripción."}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontSize: "0.75rem" }}
                  >
                    Lenguaje: {repo.language || "No especificado"}
                  </Typography>
                </CardContent>

                <CardActions sx={{ p: 1 }}>
                  <Button
                    size="small"
                    fullWidth
                    variant="contained"
                    color="primary"
                    component={Link}
                    href={repo.html_url}
                    target="_blank"
                  >
                    Ver →
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        )}
      </Container>

      {/* 🔹 Pie de página */}
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
          Disponible para colaboraciones y nuevos proyectos 🌟
        </Typography>
      </Box>
    </>
  );
}

export default App;
