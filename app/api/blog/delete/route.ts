import { deleteBlog } from "@/components/blog/actions/blog-actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const id = await req.json();

    const res = await deleteBlog(id);

    return NextResponse.json(res, { status: 201 }); // Devuelve con status 201 = creado
  } catch (error) {
    console.error("Error en la API:", error);

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}