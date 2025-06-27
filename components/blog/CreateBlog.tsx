"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";
import { BlogTable } from "./BlogTable";

const CreateBlog = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Card shadow="lg" className="animate-fade-in">
        <CardHeader className="text-center flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-primary tracking-tight">
            Panel de Administración de Blogs
          </h2>
          <p className="text-default-500 text-sm">
            Crear, editar o eliminar entradas del blog desde este panel.
          </p>
</CardHeader>
        <CardBody className="mt-4">
          <BlogTable />
        </CardBody>
      </Card>
    </div>
  );
};

export default CreateBlog;