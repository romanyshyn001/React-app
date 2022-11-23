import React, { FC } from "react"
import { useFormik } from "formik";
import * as Yup from 'yup'
import s from './Dialogs.module.css';
import { createField } from "../common/FormsControls/FormsControl";
import { NewMessageFormType } from "./Dialog";

// Переробити або видалити
type AddDialogPostType = Extract<keyof NewMessageFormType, string>
type PropsType = {
  updateDialogText: () => void;
  addDialogPost: string;
}
//
export const AddMessageForm = (props:any) => {
  // console.log('props', props)
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
      console.log('values', values)
      props.updateDialogText(values)
      resetForm()
    }
  }
  )

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* <textarea className={s.inputText} 
            id='addDialogPost'
            name='addDialogPost'
            type='text'
            value={ formik.values.addDialogPost }
            onChange={ formik.handleChange } 
      /> */}
      {createField(
        "addDialogPost",
        "addDialogPost",
        "text",
        formik.handleChange,
        formik.handleBlur,
        formik.values.addDialogPost
      )}
      {formik.touched.addDialogPost && formik.errors.addDialogPost
        ? (<div className={s.dialogPost}>{formik.errors.addDialogPost}</div>)
        : null
      }
      <button type="submit" > Send </button>
    </form>
  )
}