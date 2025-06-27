'use client'

import {Form, Input, Button, image, addToast} from "@heroui/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Blog } from '@/types';
interface props {
    blog: Blog | null
}

const FormNewBlog = ({blog}: props) => {
  const endpoint = blog ? `/api/blog/edit` : "/api/blogs";
    const formik = useFormik({
    enableReinitialize: true,
    initialValues: blog ? {...blog}: {
        title: '',
        content: '',
        image: '',
    },
    validationSchema: Yup.object({
        title: Yup.string().max(20, 'Debe tener como maximo 20 caracteres').required('Requerido'),
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
    
        // opcional: limpiar el formulario
        resetForm();
    
        // opcional: mostrar alerta o redireccionar
        addToast({
          title: "Blog creado",
          description: "El blog se ha creado correctamente",
          color: "success",
          timeout: 2000,
          shouldShowTimeoutProgress: true,
        });
      } catch (error) {
        console.error("Error al enviar blog:", error);
        addToast({
          title: "Error en el blog",
          description: "El blog no se creo correctamente",
          color: "danger",
          timeout: 2000,
          shouldShowTimeoutProgress: true,
        });
      }
    }  
  });

  return (
    <Form onSubmit={formik.handleSubmit}
      className="w-full max-w-xs flex flex-col gap-4"
    >
      <Input
      id='title'
      label="Titulo"
      labelPlacement='outside'
      name='title'
      placeholder='Ingrese un titulo'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title && (
  <p className="text-red-500 text-sm">{formik.errors.title}</p>
)}

      <Input
      id='content'
      label="Contenido"
      labelPlacement='outside'
      name='content'
      placeholder='Ingrese un contenido'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.content}
      />
        {formik.touched.content && formik.errors.content && (
  <p className="text-red-500 text-sm">{formik.errors.content}</p>
)}

      <Input
      id='image'
      label="Imagen"
      labelPlacement='outside'
      name='image'
      placeholder='Ingrese la url de una imagen'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.image}
      />
      {formik.touched.image && formik.errors.image && (
  <p className="text-red-500 text-sm">{formik.errors.image}</p>
)}

      <div className="flex gap-2">
        <Button color="primary" type="submit">
          Submit
        </Button>
        <Button type="reset" variant="flat">
          Reset
        </Button>
      </div>
      
    </Form>
  )
}

export default FormNewBlog