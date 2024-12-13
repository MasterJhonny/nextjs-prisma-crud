import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const { id } = await params;
  const task = await prisma.tasks.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const data = await request.json();
  const taskUpdated = await prisma.tasks.update({
    where: {
      id: Number(id),
    },
    data: data,
  });
  return NextResponse.json(taskUpdated);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  let rta = {
    delete: true,
    message: "Deleted Taks! " + id,
  };
  try {
    const taskDeleted = await prisma.tasks.delete({
      where: {
        id: Number(id),
      },
    });
    console.log("🚀 ~ DELETE ~ taskDeleted:", taskDeleted);
  } catch (error) {
    // console.log("🚀 ~ DELETE ~ error:", error);
    rta.delete = false;
    rta.message = error.message;
  }
  return NextResponse.json(rta);
}
