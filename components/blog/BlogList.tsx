"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import { Spinner } from "@heroui/spinner";
import { Blog } from "@/types";

export const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog");
        if (!res.ok) throw new Error("Error al obtener blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <Spinner label="Cargando blogs..." color="primary" />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogs.map((blog) => (
        <Card key={blog.id} shadow="md" className="hover:shadow-lg transition">
          <CardHeader className="p-0">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-xl" />
          </CardHeader>
          <CardBody>
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">{blog.content}</p>
          </CardBody>
          <CardFooter>
            {/* Aquí podrías poner un botón para leer más, por ejemplo */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;