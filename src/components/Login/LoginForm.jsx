import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import s from './login.module.css'

const LoginForms = (props) => {
 


   const formik = useFormik({
      initialValues: {
         password: '',
         email: '',
         rememberMe: false
      },
      validationSchema: Yup.object({
         password: Yup.string()
            .max(20, 'Must be at least 20 char')
            .required('Required'),
         email: Yup.string()
            .email('Invalid Email')
            .required('*Required')
      }),
      onSubmit: (values) => {
         // console.log(' props.login',  props)
         props.login(values)
      }
   })

   return (
      <form onSubmit={formik.handleSubmit}>
         <label htmlFor="email">Email address</label>
         <div>
            <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
         />
         {  formik.touched.email && formik.errors.email 
         ? ( <div className={s.email}>{formik.errors.email}</div> )
         : null
         } 
         </div>
         <label htmlFor="password">Password</label>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {  formik.touched.password && formik.errors.password 
         ? ( <div className={s.password}>{formik.errors.password}</div> )
         : null
         } 
      </div>
      <label htmlFor="rememberMe">RememberMe</label>
      <div>
        <input
          id="rememberMe"
          name="rememberMe"
          type="checkbox"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rememberMe}
        />
      </div>
         <button type="submit">Login</button>
      </form>
   )
}
export default LoginForms
