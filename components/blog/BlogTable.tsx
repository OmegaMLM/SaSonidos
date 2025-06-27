"use client";

import { useEffect, useState } from "react";
import { addToast, Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { Spinner } from "@heroui/spinner";
import FormNewBlog from "../forms/FormNewBlog";
import { Blog } from "@/types";

export const BlogTable = () => {
    const [blog, setBlog] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog");
        if (!res.ok) throw new Error("Error al obtener los blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <Spinner label="Cargando blogs..." color="primary" />;
  }
  const handleEdit = (blog: Blog) => {
    setBlog(blog);
  }

  const  handleDelete = async (id: string) => {
      try{
        const res = await fetch("/api/blog/delete", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(id),
        });
        if (!res.ok) throw new Error("Error al eliminar el blog");
        
        const data = await res.json();
        console.log("Blog eliminado:", data);
        addToast({
          title: "Blog eliminado",
          description: "El blog se ha eliminado correctamente",
          color: "success",
          timeout: 2000,
          shouldShowTimeoutProgress: true,
        });
        setBlogs(prev => prev.filter(blog => blog.id !== id));
      }
  
  catch (error) {
    console.error(error);
  }
  }
  return (
    <div className="overflow-x-auto p-4">
      <Table>
        <TableHeader>
            <TableColumn>Título</TableColumn>
            <TableColumn>Contenido</TableColumn>
            <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell>{blog.title}</TableCell>
              <TableCell>{blog.content}</TableCell>
              <TableCell>
                <Button onPress={() => handleEdit(blog)} color="warning">Editar</Button>
                <Button onPress={() => handleDelete(blog.id)} color="danger">Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <FormNewBlog blog = {blog} />
    </div>

  );
};
