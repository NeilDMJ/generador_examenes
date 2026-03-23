import { NextRequest, NextResponse } from "next/server";

const AUTH_COOKIE_NAME = "auth_token";

// Rutas que requieren sesión activa
const PROTECTED_PREFIXES = ["/dashboard", "/quiz", "/leaderboard", "/admin"];

// Rutas de autenticación — redirigen al dashboard si ya hay sesión
const AUTH_ROUTES = ["/login", "/register", "/forgot-password"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix),
  );
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  if (isProtected && !token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Excluye: archivos estáticos, imágenes, favicon y rutas de API.
     * Solo aplica a rutas de página.
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
