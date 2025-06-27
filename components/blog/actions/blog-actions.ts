import { PrismaClient } from "@/lib/prisma/generated/prisma";
import { Blog } from "@/types";

const prisma = new PrismaClient();

export const getBlogs = async () => {
    const blogs = await prisma.blog.findMany({});
    return blogs;
}

export const createBlog = async (data: Blog) => {
    const newBlog = await prisma.blog.create({ data });
    return newBlog;
}