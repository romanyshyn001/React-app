import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import s from "./Dialogs.module.css";
import { createField } from "../common/FormsControls/FormsControl";
import { Button } from "antd";

export type NewMessageFormType = {
  addDialogPost: string;
};
type PropsType = {
  sendDialogText: (messageText: string) => void;
};

export const AddMessageForm: React.FC<PropsType> = ({
  sendDialogText,
}: PropsType) => {
  const formik = useFormik({
    initialValues: {
      addDialogPost: "",
    },
    validationSchema: Yup.object({
      addDialogPost: Yup.string()
        .max(20, "Maximum 20 characters")
        .min(2, "Minimun characters 2")
        .required("Required"),
    }),
    onSubmit: ({ addDialogPost }: NewMessageFormType, { resetForm }) => {
      sendDialogText(addDialogPost);
      resetForm();
    },
  });

  return (
    <form className={s.dialogMsg} onSubmit={formik.handleSubmit}>
      {createField(
        "addDialogPost",
        "addDialogPost",
        "text",
        formik.handleChange,
        formik.handleBlur,
        formik.values.addDialogPost
      )}
      {formik.touched.addDialogPost && formik.errors.addDialogPost ? (
        <div className={s.dialogPost}>{formik.errors.addDialogPost}</div>
      ) : null}
      <Button type="primary" htmlType="submit" className={s.btn}>
        {" "}
        Send{" "}
      </Button>
    </form>
  );
};
