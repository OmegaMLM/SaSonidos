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
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <Spinner label="Cargando blogs..." color="primary" />
    </div>
  );
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
    <div className="overflow-x-auto p-4 space-y-8">
  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
    <h2 className="text-xl font-semibold mb-4">Lista de Blogs</h2>
    <Table isStriped aria-label="Lista de blogs">
      <TableHeader>
        <TableColumn>Título</TableColumn>
        <TableColumn>Contenido</TableColumn>
        <TableColumn>Acciones</TableColumn>
      </TableHeader>
      <TableBody>
        {blogs.map((blog) => (
          <TableRow key={blog.id}>
            <TableCell>{blog.title}</TableCell>
            <TableCell className="max-w-[250px] truncate">{blog.content}</TableCell>
            <TableCell className="flex gap-2">
              <Button onPress={() => handleEdit(blog)} color="warning" size="sm">
                Editar
              </Button>
              <Button onPress={() => handleDelete(blog.id)} color="danger" size="sm">
                Eliminar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>

  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
    <h2 className="text-xl font-semibold mb-4">{blog ? "Editar Blog" : "Nuevo Blog"}</h2>
    <FormNewBlog blog={blog} />
  </div>
</div>


  );
};
