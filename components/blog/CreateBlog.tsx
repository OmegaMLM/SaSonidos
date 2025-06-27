import React from 'react'
import { BlogTable } from './BlogTable';
import FormNewBlog from '../forms/FormNewBlog';

const CreateBlog = () => {
  return (
    <div>
        <h2>Panel de Administracion de Blogs</h2>
        <BlogTable />
        <FormNewBlog />
    </div>
  )
}

export default CreateBlog;