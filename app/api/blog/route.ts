import { createBlog, getBlogs } from "@/components/blog/actions/blog-actions";
import { Blog } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
    const blogs = await getBlogs();
    return NextResponse.json(blogs);
}

export async function POST(data: Blog) {
    try {
        const res = await createBlog(data);
        if (res) {
            return NextResponse.json(res);
        } 
    } catch (error) {
        console.error("Error en la api: ", error);
        
    }
}