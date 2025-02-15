import  { useState } from 'react'
import { ErrorMessage, Field, Formik,Form } from 'formik'
import { TextField } from '@mui/material';
import * as Yup from 'Yup'

export const Login = () => {
  const [formValue,setFormValue]=useState();

 
  const initialValues = {
    email: "",
    password: "",
  };

 
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit=()=>{
    console.log("handle Submit");
  };

  return (
    <>
    <Formik onSubmit={handleSubmit}
     validationSchema={validationSchema} 
     initialValues={initialValues}
     >
      <Form className="space-y-5">
        <div className='space-y-5'>
          <div>
            <Field as={TextField} name='email' placeholder='Email' type="email" variant="outlined" fullWidth/>
            <ErrorMessage name='email' component={"div"} className='text-red-500'/>
          </div>
          <div>
            <Field as={TextField} name='password' placeholder='Password' type="password" variant="outlined" fullWidth/>
            <ErrorMessage name='password' component={"div"} className='text-red-500'/>
          </div>

        </div>

      </Form>
    </Formik>
    </>
  )
}
