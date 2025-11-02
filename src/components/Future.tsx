
import { Box, Typography, Button, Container } from "@mui/material";
import { Code as CodeIcon, Group as GroupIcon } from "@mui/icons-material";

export default function Future() {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "background.default",
        color: "text.primary",
        textAlign: "center",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Container maxWidth="md">
        <GroupIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 3 }}
        >
          Mirando hacia el futuro 🌱
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph>
          Creo firmemente que la colaboración y el código abierto son las bases
          para seguir creciendo como desarrollador. Participar en proyectos
          compartidos me permite aprender de otros, aportar mi experiencia y
          construir algo que beneficie a toda la comunidad.
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph>
          Mi objetivo es seguir mejorando mis habilidades técnicas y blandas,
          desarrollar proyectos de impacto y colaborar con personas apasionadas
          por crear software libre, ético y útil para el mundo profesional.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<CodeIcon />}
          href="https://github.com/gtshadow33"
          target="_blank"
          sx={{ mt: 3, px: 4, py: 1.5, borderRadius: 3, fontWeight: "bold" }}
        >
          Ver mi GitHub
        </Button>
      </Container>
    </Box>
  );
}
