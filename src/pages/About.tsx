import {AppBar,Toolbar,Button, Box,Link, Typography, Container, Card, CardContent } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function About() {
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
         <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ textTransform: "none" }}
          >
            Portafolios de Gtshadow33
          </Button>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Botones de navegación */}
         
          <Button
            color="inherit"
            component={RouterLink}
            to="/about"
            sx={{ textTransform: "none" }}
          >
            About
          </Button>

          {/* Botón de correo */}
          <Button
            color="inherit"
            href="mailto:gtshadow33@gmail.com"
            sx={{
              height: 32,
              width: 32,
              minWidth: 32,
              border: "2px solid rgba(255,255,255,0.3)",
              borderRadius: 2,
              backgroundImage:
                'url("https://img.icons8.com/ios/50/mail.png")',
              backgroundSize: "20px 20px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
    <Container sx={{ py: 6 }}>
      
       
      <Card
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 3,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          backgroundColor: "background.paper",
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Sobre mí
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{marginBottom:"10px"}} >
            ¡Hola! Soy <strong>gtshadow33</strong>, una persona joven con una
            enorme curiosidad por el mundo de la tecnología y el desarrollo web.
            Desde que descubrí la programación, me ha fascinado la idea de
            construir cosas desde cero, de poder transformar una idea en algo
            que realmente funcione y que otras personas puedan usar.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{marginBottom:"10px"}}>
            Esta página web es parte de mi aprendizaje. La construí con
            <strong> React</strong>, y la estoy usando como una herramienta para
            mejorar mis conocimientos en diseño, componentes reutilizables,
            arquitectura front-end y buenas prácticas de desarrollo. Más allá
            del código, este proyecto representa mi deseo de aprender de forma
            práctica, enfrentando errores, probando nuevas librerías y
            descubriendo cómo mejorar cada pequeño detalle.
          </Typography>

          <Typography variant="body1" color="text.secondary"sx={{marginBottom:"10px"}} >
            Soy alguien que cree firmemente que la mejor manera de crecer es
            <strong> hacer cosas</strong>, no solo estudiarlas. Por eso me gusta experimentar
            con tecnologías modernas como <strong>TypeScript</strong>,{" "}
            <strong>Material UI</strong>, y próximamente <strong>Next.js</strong>{" "}
            y <strong>Node.js</strong>. Quiero seguir construyendo proyectos que
            me reten, que me saquen de mi zona de confort y que me permitan
            dominar el desarrollo full-stack paso a paso.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{marginBottom:"10px"}}>
            Además de la programación, me apasiona aprender sobre diseño de
            interfaces y experiencia de usuario (UI/UX). Me interesa cómo los
            colores, las tipografías y las animaciones pueden cambiar por
            completo la forma en que alguien percibe una aplicación. Busco que
            cada uno de mis proyectos no solo funcione bien, sino que también se
            sienta agradable de usar.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{marginBottom:"10px"}}>
            Aunque todavía estoy en una etapa de aprendizaje, me esfuerzo por
            mejorar cada día. Me motiva saber que cada línea de código que
            escribo me acerca más a convertirme en un desarrollador sólido,
            capaz de crear aplicaciones modernas, rápidas y elegantes. Me gusta
            colaborar, compartir ideas y aprender de otros, porque sé que en la
            tecnología, el conocimiento se multiplica cuando se comparte.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{marginBottom:"10px"}}>
            Mi meta con este portafolio es seguir agregando proyectos, probar
            nuevas tecnologías y documentar mi progreso. Con el tiempo quiero
            mirar atrás y ver no solo el código que escribí, sino el camino que
            recorrí para llegar aquí. Si estás leyendo esto, probablemente
            compartimos la misma pasión por crear, aprender y mejorar — y eso es
            algo que siempre me motiva a seguir adelante.
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Gracias por visitar mi página y por interesarte en mi trabajo.
            Espero que este sea solo el comienzo de una larga trayectoria
            construyendo ideas con <strong>React</strong> y más allá .
          </Typography>
        </CardContent>
      </Card>
     
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
