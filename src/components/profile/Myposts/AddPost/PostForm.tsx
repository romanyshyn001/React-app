import React from "react"
import { useFormik } from "formik";
import * as Yup from 'yup'
import s from '../Post/Post.module.css'
import { createField } from "../../../common/FormsControls/FormsControl";
import { Button } from "antd";


type PropsType = {
  onPostChange: (newPostText: string) => void
}
const ProfilePostForm = ({ onPostChange }: PropsType) => {
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
    onSubmit: ({ newPostText }, { resetForm }) => {
      onPostChange(newPostText)
      resetForm()
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      {createField(
        "newPostText",
        "newPostText",
        "text",
        formik.handleChange,
        formik.handleBlur,
        formik.values.newPostText
      )}
      {formik.touched.newPostText && formik.errors.newPostText
        ? (<div className={s.post}>{formik.errors.newPostText}</div>)
        : null
      }

      <Button className={s.btn} type='primary' htmlType="submit">Add post</Button>
    </form>
  )
}

export default ProfilePostForm