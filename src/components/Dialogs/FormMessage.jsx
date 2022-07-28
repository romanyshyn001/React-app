import React from "react"
import { useFormik } from "formik";
import * as Yup from 'yup'
import s from './Dialogs.module.css';

export const AddMessageForm = (props) => {

const formik = useFormik({
  initialValues: {
    addDialogPost: ''
  },
  validationSchema: Yup.object({
    addDialogPost: Yup.string()
    .max(20, 'Maximum 20 characters')
    .min(2, 'Minimun characters 2')
    .required('Required'),
  }),
  onSubmit: (values, { resetForm }) => {
    props.updateDialogText(values)
    resetForm('')
    }
  }
)

  return (
    <form onSubmit={formik.handleSubmit}>
      <textarea className={s.inputText} 
            id='addDialogPost'
            name='addDialogPost'
            type='text'
            value={ formik.values.addDialogPost }
            onChange={ formik.handleChange } 
      />
      { formik.touched.addDialogPost && formik.errors.addDialogPost
      ? (<div className={s.dialogPost}>{ formik.errors.addDialogPost}</div>)
      : null
      }
      <button type="submit" > Send </button>
    </form>
  )
}