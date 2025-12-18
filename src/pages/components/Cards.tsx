import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

/* 🔹 Tipo de repositorio */
export interface Repo {
  id: number;
  name: string;
  html_url: string;
  fork?: boolean;
  language?: string | null;
  description?: string | null;
}

/* 🔹 Card animada */
const MotionCard = motion(Card);

/* 🔹 Componente principal */
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
      {repos.map((repo, index) => (
        <RepoCard key={repo.id} repo={repo} index={index} />
      ))}
    </Box>
  );
}

/* 🔹 Tarjeta individual animada */
function RepoCard({
  repo,
  index,
}: {
  repo: Repo;
  index: number;
}) {
  return (
    <MotionCard
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -120 : 120,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      sx={{
        width: "400px",
        maxWidth: 600,
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
      <CardContent sx={{ p: 1, height: "22vh" }}>
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
            height: "12vh",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            lineHeight: 1.3,
            fontSize: "1.8vh",
          }}
        >
          {repo.description || "Proyecto sin descripción."}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "bold", fontSize: "1.6vh" }}
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
          component="a"
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver →
        </Button>
      </CardActions>
    </MotionCard>
  );
}

export default RepoCards;
