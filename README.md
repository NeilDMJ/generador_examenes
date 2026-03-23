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

## Arquitectura y Backend

- **Autenticación**: JWT con tokens en respuesta + cookies httpOnly
- **API protegida**: Solo usuarios autenticados pueden generar exámenes
- **Persistencia**: PostgreSQL con Prisma ORM
- **Contenedores**: Docker para PostgreSQL y pgAdmin

## Stack tecnológico

### Backend
- **Framework**: Next.js 16.2.0 (Route Handlers)
- **Base de datos**: PostgreSQL con Prisma ORM
- **Autenticación**: JWT + bcrypt para hash de contraseñas
- **Validación**: Zod para validación de schemas
- **IA para generación**: Google Gemini API

### Frontend
- **React**: 19.2.4
- **Estilos**: Tailwind CSS 4.0
- **TypeScript**: Para type safety

## Cómo empezar

### 1. Configurar variables de entorno

Copia el archivo de ejemplo:

```bash
cp .env.example .env
```

Completa al menos estas claves:

- `DATABASE_URL`: Conexión a PostgreSQL
- `JWT_SECRET`: Clave secreta para tokens JWT
- `GEMINI_API_KEY`: API key de Google Gemini

### 2. Levantar la base de datos

```bash
npm run docker:up
```

Servicios disponibles:

- **PostgreSQL**: `localhost:5432`
- **pgAdmin**: `http://localhost:5050`
  - Email: `admin@quizzly.com`
  - Contraseña: `admin123`

### 3. Configurar Prisma

Generar cliente de Prisma:

```bash
npm run db:generate
```

Crear la migración inicial:

```bash
npm run db:migrate -- --name init
```

### 4. Ejecutar el proyecto

```bash
npm run dev
```

La app estará disponible en `http://localhost:3000`

## API - Endpoints disponibles

### Autenticación

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/auth/register` | POST | Registrar nuevo usuario |
| `/api/auth/login` | POST | Iniciar sesión |
| `/api/auth/me` | GET | Obtener datos del usuario autenticado |
| `/api/auth/logout` | POST | Cerrar sesión |

### Generación de exámenes (protegido)

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/quizzes/generate` | POST | Generar un nuevo examen con IA |

**Requiere autenticación**: Token en header `Authorization: Bearer <token>` o cookie `auth_token`

**Body esperado**:
```json
{
  "topic": "Biología celular",
  "difficulty": "medium",
  "questionCount": 10
}
```

**Parámetros**:
- `topic` (string): Tema o asignatura del examen
- `difficulty` (string): Nivel de dificultad (easy, medium, hard)
- `questionCount` (number): Cantidad de preguntas a generar

**Respuesta**: JSON con las preguntas generadas por Gemini AI

## Estructura del proyecto

```
app/
  ├── api/
  │   ├── auth/              # Endpoints de autenticación
  │   │   ├── register/
  │   │   ├── login/
  │   │   ├── me/
  │   │   └── logout/
  │   └── quizzes/           # Endpoints de generación de exámenes
  │       └── generate/
  ├── page.tsx               # Página principal (frontend)
  └── layout.tsx             # Layout de la aplicación

lib/
  ├── auth.ts                # Funciones de autenticación y JWT
  ├── gemini.ts              # Integración con Gemini API
  ├── prisma.ts              # Cliente de Prisma
  └── validators.ts          # Validaciones con Zod

prisma/
  ├── schema.prisma          # Definición del modelo de datos
  └── migrations/            # Migraciones de base de datos

Modelos de base de datos:
  - User: Usuarios registrados
  - GeneratedQuiz: Historial de exámenes generados
```
