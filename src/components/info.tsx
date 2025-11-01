import { Box, Typography, Avatar } from "@mui/material";

function Info() {
  return (
    <Box
      id="info"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        py: 8,
        px: 3,
        backgroundColor: "background.default",
      }}
    >
      
      <Avatar
        src="https://avatars.githubusercontent.com/u/237056829?v=4"
        alt="Foto de perfil o ilustración"
        sx={{
          width: 180,
          height: 180,
          border: "3px solid rgba(0,0,0,0.1)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        }}
      />

      {/* 🔹 Texto de información */}
      <Box maxWidth={600}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Sobre mí
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
          Desde siempre me ha fascinado cómo la tecnología puede transformar
          ideas en soluciones reales. Empecé a programar por curiosidad, 
          buscando entender cómo funcionaban las aplicaciones que usaba todos los días.
          Poco a poco, esa curiosidad se convirtió en pasión y ahora dedico mi tiempo
          a crear, aprender y compartir conocimiento.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
          Mis metas incluyen seguir mejorando mis habilidades como desarrollador,
          colaborar en proyectos de código abierto y aportar herramientas que ayuden
          a otros en su propio camino tecnológico.
        </Typography>

        <Typography variant="body2" color="text.secondary">
          “El aprendizaje nunca termina — cada línea de código es una nueva historia.”
        </Typography>
      </Box>
    
    </Box>
  );
}

export default Info;
