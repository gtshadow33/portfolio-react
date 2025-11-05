
import { Box, Typography, Button, Container, Avatar } from "@mui/material";
import { Code as CodeIcon} from "@mui/icons-material";

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
        <Avatar
        src="https://avatars.githubusercontent.com/u/237056829?v=4"
        alt="Foto de perfil o ilustración"
        sx={{
          margin: "0 auto",
          mb: 4,
          width: 180,
          height: 180,
          border: "3px solid rgba(0,0,0,0.1)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        }}
      />
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
