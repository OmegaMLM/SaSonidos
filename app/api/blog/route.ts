import { createBlog, getBlogs } from "@/components/blog/actions/blog-actions";
import { Blog } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
    const blogs = await getBlogs();
    return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const res = await createBlog(data);

    return NextResponse.json(res, { status: 201 }); // Devuelve con status 201 = creado
  } catch (error) {
    console.error("Error en la API:", error);

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
