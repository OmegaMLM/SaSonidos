"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { Blog } from "@/types";
import { motion } from "framer-motion";

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

  const skeletonArray = new Array(6).fill(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {loading
        ? skeletonArray.map((_, index) => (
            <div
              key={index}
              className="w-full h-64 bg-default-100 rounded-xl animate-pulse"
            />
          ))
        : blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                shadow="sm"
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="p-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </CardHeader>
                <CardBody className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold truncate">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-default-500 line-clamp-2">
                    {blog.content}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
    </div>
  );
};

export default BlogList;
