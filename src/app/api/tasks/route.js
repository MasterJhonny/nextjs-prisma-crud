import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const tasks = await prisma.tasks.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  const { title, description } = await request.json();
  const newTask = await prisma.tasks.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(newTask);
}
