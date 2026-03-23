# Dante Neil Martinez Jimenez
# Jesus Alfonso Morales Jaimes

# Quizzly Pulse

Aplicación web para la **generación automática de exámenes y trivias con Inteligencia Artificial**. Los usuarios pueden registrarse, autenticarse y usar Gemini API para generar cuestionarios sobre cualquier tema, con niveles de dificultad personalizables.

## ¿Qué hace la app?

### Funcionalidades principales

1. **Autenticación de usuarios**
   - Registro de nuevos usuarios con email y contraseña
   - Login seguro con JWT
   - Gestión de perfil de usuario
   - Logout seguro

2. **Generación automática de exámenes**
   - Genera preguntas de opción múltiple mediante Gemini AI
   - Personalizable por:
     - Tema/asignatura (Ej: Biología celular, Historia, etc.)
     - Nivel de dificultad (fácil, medio, difícil)
     - Cantidad de preguntas (configurable)
   - Las preguntas se almacenan en la base de datos para futura consulta

3. **Gestión segura de datos**
   - Almacenamiento de usuarios en PostgreSQL
   - Almacenamiento del historial de exámenes generados
   - Contraseñas encriptadas con bcrypt
   - Sesiones protegidas con JWT

