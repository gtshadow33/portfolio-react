import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

/* 🔹 Tipo de repositorio (según la API de GitHub simplificada) */
export interface Repo {
  id: number;
  name: string;
  html_url: string;
  fork?: boolean;
  language?: string | null;
  description?: string | null;
}

/* 🔹 Componente principal que muestra todas las tarjetas */
function RepoCards({ repos }: { repos: Repo[] }) {
  if (!Array.isArray(repos) || repos.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography color="text.secondary">
          No hay repositorios públicos disponibles.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={4}
      justifyContent="center"
      sx={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </Box>
  );
}

/* 🔹 Tarjeta individual */
function RepoCard({ repo }: { repo: Repo }) {
  return (
    <Card
      sx={{
        width: "400px",
        maxWidth: 600,
        minHeight: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 1.5,
        borderRadius: 2,
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 6px 12px rgba(0,0,0,0.25)",
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
            fontSize: "0.9rem",
          }}
        >
          {repo.description || "Proyecto sin descripción."}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Lenguaje: {repo.language || "No especificado"}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 1 }}>
        <Button
          size="small"
          fullWidth
          variant="contained"
          color="primary"
          component="a"
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver →
        </Button>
      </CardActions>
    </Card>
  );
}

export default RepoCards;
