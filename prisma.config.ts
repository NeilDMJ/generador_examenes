import { defineConfig } from "prisma/config";
import * as fs from "node:fs";
import * as path from "node:path";

// Prisma CLI solo carga .env automáticamente; cargamos .env.local manualmente
// para que DATABASE_URL esté disponible al correr prisma migrate / generate.
function loadEnvLocal() {
  const envPath = path.resolve(process.cwd(), ".env.local");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, "");
    if (key && !(key in process.env)) {
      process.env[key] = value;
    }
  }
}

loadEnvLocal();

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
