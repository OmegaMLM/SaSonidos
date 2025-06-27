'use client'

import React, { useState } from 'react'
import {Form, Input, Button} from "@heroui/react";
import { useFormik } from 'formik';

const FormNewBlog = () => {
  const formik = useFormik({
    initialValues: {
        title: '',
        content: '',
        image: '',
    },
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    },  
  });

  return (
    <Form onSubmit={formik.handleSubmit}
      className="w-full max-w-xs flex flex-col gap-4"
    >
      <Input
      label="Titulo"
      labelPlacement='outside'
      name='title'
      placeholder='Ingrese un titulo'
      />

      <Input
      label="Contenido"
      labelPlacement='outside'
      name='content'
      placeholder='Ingrese un contenido'
      />
      <Input
      label="Imagen"
      labelPlacement='outside'
      name='image'
      placeholder='Ingrese la url de una imagen'
      />
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