import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  await prisma.visit.create({
    data: {
      ip,
    },
  });

  return NextResponse.json({ success: true });
}
