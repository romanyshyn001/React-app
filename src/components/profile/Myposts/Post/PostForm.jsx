import React from "react"
import { useFormik } from "formik";
import * as Yup from 'yup'
import s from './Post.module.css'

const ProfilePostForm = (props) => {

  const formik = useFormik({
    initialValues: {
      newPostText: ''
    },
    validationSchema: Yup.object({
      newPostText: Yup.string()
      .max(20, 'Maximum 20 characters')
      .min(2, 'Minimun characters 2')
      .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      props.onPostChange(values)
      resetForm('')
    }
  })

  return (
      <form onSubmit={formik.handleSubmit}>
        <textarea 
          id='newPostText'
          name='newPostText'
          type='text'
          value={ formik.values.newPostText } 
          onChange={ formik.handleChange}
        />
        { formik.touched.newPostText && formik.errors.newPostText
        ? (<div className={s.post}>{formik.errors.newPostText}</div>)
        : null  
        }

        <button type='submit'>Add post</button>
      </form>
  )
}

export default ProfilePostForm