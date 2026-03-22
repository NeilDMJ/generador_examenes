import { compare, hash } from "bcryptjs";
import {
  sign,
  verify,
  type JwtPayload,
  type Secret,
  type SignOptions,
} from "jsonwebtoken";
import { NextRequest } from "next/server";

const AUTH_COOKIE_NAME = "auth_token";
const DEFAULT_EXPIRY = "7d";

export type AuthUserToken = {
  sub: string;
  email: string;
};

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET no esta configurada");
  }

  return secret;
}

export async function hashPassword(password: string) {
  return hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return compare(password, hashedPassword);
}

export function signAuthToken(payload: AuthUserToken) {
  const secret: Secret = getJwtSecret();
  const expiresIn =
    (process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"] | undefined) ?? DEFAULT_EXPIRY;

  return sign(payload, secret, { expiresIn });
}

export function verifyAuthToken(token: string): AuthUserToken | null {
  try {
    const decoded = verify(token, getJwtSecret()) as JwtPayload & AuthUserToken;
    if (!decoded.sub || !decoded.email) {
      return null;
    }

    return {
      sub: decoded.sub,
      email: decoded.email,
    };
  } catch {
    return null;
  }
}

export function getTokenFromRequest(request: NextRequest): string | null {
  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.slice("Bearer ".length).trim();
  }

  return request.cookies.get(AUTH_COOKIE_NAME)?.value ?? null;
}

export function getAuthCookieName() {
  return AUTH_COOKIE_NAME;
}
