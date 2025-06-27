'use client';

import { Form, Input, Button, addToast } from "@heroui/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Blog } from '@/types';
import ImageForm from "./ImageForm";

interface Props {
  blog: Blog | null;
}

const FormNewBlog = ({ blog }: Props) => {
  const endpoint = blog ? `/api/blog/edit` : "/api/blog";

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: blog ? { ...blog } : {
      title: '',
      content: '',
      image: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(40, 'Debe tener como máximo 40 caracteres')
        .required('Requerido'),
      content: Yup.string().required('Requerido'),
      image: Yup.string().required('Requerido'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!res.ok) throw new Error("Error al crear el blog");

        const data = await res.json();
        console.log("Blog creado:", data);

        resetForm();

        addToast({
          title: blog ? "Blog actualizado" : "Blog creado",
          description: `El blog se ha ${blog ? "actualizado" : "creado"} correctamente`,
          color: "success",
          timeout: 2000,
          shouldShowTimeoutProgress: true,
        });
      } catch (error) {
        console.error("Error al enviar blog:", error);
        addToast({
          title: "Error",
          description: "Hubo un problema al enviar el blog",
          color: "danger",
          timeout: 2000,
          shouldShowTimeoutProgress: true,
        });
      }
    },
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-md mx-auto flex flex-col gap-6"
    >
      <Input
        id="title"
        label="Título"
        labelPlacement="outside"
        name="title"
        placeholder="Ingrese un título"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title && (
        <p className="text-red-500 text-sm">{formik.errors.title}</p>
      )}

      <Input
        id="content"
        label="Contenido"
        labelPlacement="outside"
        name="content"
        placeholder="Ingrese el contenido del blog"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.content}
      />
      {formik.touched.content && formik.errors.content && (
        <p className="text-red-500 text-sm">{formik.errors.content}</p>
      )}

      <div>
        <label className="text-sm font-medium text-default-600 mb-1 block">
          Imagen destacada
        </label>
        <ImageForm
          value={formik.values.image}
          onChange={(url: string) => formik.setFieldValue('image', url)}
        />
        {formik.touched.image && formik.errors.image && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.image}</p>
        )}
      </div>

      <div className="flex gap-3 justify-end">
        <Button color="primary" type="submit">
          {blog ? "Actualizar" : "Crear"}
        </Button>
        <Button type="reset" variant="flat" onClick={formik.handleReset}>
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default FormNewBlog;
