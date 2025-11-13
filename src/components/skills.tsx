
import {
  Card,
  CardContent,
  Typography,
  Chip,
  LinearProgress,
  Stack,
  Box,
} from "@mui/material";
import { Code, Terminal, Build } from "@mui/icons-material";

const skills = [
  {
    category: "Lenguajes / Backend",
    icon: <Code />,
    items: [
      { name: "Rust", level: 85 },
      { name: "JavaScript / TypeScript (para react y tauri)", level: 75 },
      { name: "Bash", level: 80 },
      { name: "Mysql", level: 70 },
    ],
  },
  {
    category: "DevOps / Entorno",
    icon: <Terminal />,
    items: [
      { name: "Linux (4 años de uso)", level: 95 },
      { name: "Docker", level: 80 },
      { name: "Git / GitHub", level: 85 },
    ],
  },
  {
    category: "Frameworks / Otros",
    icon: <Build />,
    items: [
      { name: "React", level: 75 },
      { name: "Rocket (Rust)", level: 70 },
      { name: "Tauri", level: 70 },
      { name: "GTK", level: 60 },
    ],
  },
];

export default function Skills() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 2,
        p: 2,
      }}
    >
      {skills.map((group) => (
        <Card
          key={group.category}
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            backgroundColor: "#0d1117",
            color: "#e6edf3",
            transition: "box-shadow 0.3s ease-in-out",
            ":hover": {
              transform: "scale(1.03)",
              boxShadow: "0 6px 12px rgba(0,0,0,0.25)",
            },
          }}
        >
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              {group.icon}
              <Typography variant="h6" fontWeight="bold">
                {group.category}
              </Typography>
            </Stack>

            {group.items.map((skill) => (
              <Box key={skill.name} sx={{ mb: 1.5 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">{skill.name}</Typography>
                  <Chip
                    label={`${skill.level}%`}
                    size="small"
                    sx={{ backgroundColor: "#1f6feb", color: "white" }}
                  />
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 6,
                    borderRadius: 2,
                    backgroundColor: "#30363d",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#238636",
                      ":hover": { backgroundColor: "#2ea043" },
                    },
                  }}
                />
              </Box>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
