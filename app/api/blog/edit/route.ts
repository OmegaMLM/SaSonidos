import {editBlog } from "@/components/blog/actions/blog-actions";
import {BlogForm } from "@/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const id = data.id
    const {title, content, image} = data
    const blogdata: BlogForm = {title, content, image}

    const res = await editBlog(id, blogdata);

    return NextResponse.json(res, { status: 201 }); // Devuelve con status 201 = creado
  } catch (error) {
    console.error("Error en la API:", error);

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}