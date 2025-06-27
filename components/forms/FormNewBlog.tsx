'use client'

import React, { useState } from 'react'
import {Form, Input, Button} from "@heroui/react";

const FormNewBlog = () => {
  

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
    >
      <Input
      />

      <Input
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