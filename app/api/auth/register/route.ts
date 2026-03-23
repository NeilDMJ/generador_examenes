import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { getAuthCookieName, hashPassword, signAuthToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/lib/validators";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const input = registerSchema.parse(body);

    const passwordHash = await hashPassword(input.password);

    const user = await prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    const token = signAuthToken({
      sub: user.id,
      email: user.email,
    });

    const response = NextResponse.json(
      {
        message: "Usuario registrado correctamente",
        token,
        user,
      },
      { status: 201 },
    );

    response.cookies.set(getAuthCookieName(), token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return NextResponse.json({ error: "El email ya esta registrado" }, { status: 409 });
    }

    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "JSON invalido" }, { status: 400 });
    }

    return NextResponse.json({ error: "No se pudo registrar el usuario" }, { status: 400 });
  }
}
