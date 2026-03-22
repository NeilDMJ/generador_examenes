# Quizzly Pulse

Aplicacion web de trivia y generacion de examenes con enfoque academico.

## Backend implementado

- Autenticacion de usuarios con registro, login, perfil y logout.
- JWT para sesion (token en respuesta + cookie `httpOnly`).
- API protegida para generar quizzes con Gemini.
- Persistencia en PostgreSQL con Prisma.
- Contenedores Docker para PostgreSQL y pgAdmin.

## Stack backend

- Next.js Route Handlers (`app/api/*`)
- Prisma ORM
- PostgreSQL
- JWT + bcrypt
- Zod para validacion
- Gemini API (`generateContent`)

## Variables de entorno

1. Copia el archivo de ejemplo:

```bash
cp .env.example .env
```

2. Completa al menos estas claves:

- `DATABASE_URL`
- `JWT_SECRET`
- `GEMINI_API_KEY`

## Levantar base de datos y pgAdmin

```bash
npm run docker:up
```

Servicios:

- PostgreSQL: `localhost:5432`
- pgAdmin: `http://localhost:5050`
	- email: `admin@quizzly.com`
	- password: `admin123`

## Configurar Prisma

Generar cliente:

```bash
npm run db:generate
```

Crear migracion inicial:

```bash
npm run db:migrate -- --name init
```

## Ejecutar proyecto

```bash
npm run dev
```

## Endpoints de API

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/auth/logout`

### Quiz con IA

- `POST /api/quizzes/generate` (requiere token)

Body esperado:

```json
{
	"topic": "Biologia celular",
	"difficulty": "medium",
	"questionCount": 10
}
```

Autenticacion para endpoint protegido:

- Header: `Authorization: Bearer <token>`
- O cookie `auth_token` (se setea automaticamente al registrar/login)

## Estructura agregada

- `prisma/schema.prisma`
- `lib/prisma.ts`
- `lib/auth.ts`
- `lib/gemini.ts`
- `lib/validators.ts`
- `app/api/auth/*`
- `app/api/quizzes/generate/route.ts`
- `docker-compose.yml`
- `.env.example`

