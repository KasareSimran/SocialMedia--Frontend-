import React, { useState } from 'react'
import { Field, Formik } from 'formik'
import { TextField } from '@mui/material';

export const Login = () => {
  const [formValue,setFormValue]=useState();

 
  const validationSchema={}
  const initialValues={}

  const handleSubmit=()=>{
    console.log("handle Submit")
  }

  return (
    <>
    <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={initialValues}>
      <Form className="space-y-5">
        <div className='space-y-5'>
          <div>
            <Field as={TextField} name='email' placeholder='Email' type="email" variant="outline" fullWidth/>
          </div>

        </div>

      </Form>
    </Formik>
    </>
  )
}
