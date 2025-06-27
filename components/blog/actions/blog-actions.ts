import { PrismaClient } from "@/lib/prisma/generated/prisma";
import { Blog, BlogForm } from "@/types";

const prisma = new PrismaClient();

export const getBlogs = async () => {
    const blogs = await prisma.blog.findMany({});
    return blogs;
}

export const createBlog = async (data: Blog) => {
    const newBlog = await prisma.blog.create({ data });
    return newBlog;
}

export const editBlog = async (id: string, data: BlogForm) => {
    const editedBlog = await prisma.blog.update({ where: { id }, data });
    return editedBlog;
}

export const deleteBlog = async (id: string) => {
    const deletedBlog = await prisma.blog.delete({ where: { id } });
    return deletedBlog;
}