import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import s from "./login.module.css";
import { createField } from "../common/FormsControls/FormsControl";

const LoginForms = ({ login, captchaUrl }) => {
  console.log(captchaUrl);
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      rememberMe: false,
      captcha: ""
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, "Must be at least 20 char")
        .required("Required"),
      email: Yup.string().email("Invalid Email").required("*Required"),
    }),
    onSubmit: (values, { setSubmitting, setStatus }) => {
      console.log(values)
      login(values, setStatus);
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email address</label>
      {createField(
        "email",
        "email",
        "email",
        formik.handleChange,
        formik.handleBlur,
        formik.values.email
      )}

      {formik.touched.email && formik.errors.email ? (
        <div className={s.email}>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="password">Password</label>
      {createField(
        "password",
        "password",
        "password",
        formik.handleChange,
        formik.handleBlur,
        formik.values.password
      )}
      {formik.touched.password && formik.errors.password ? (
        <div className={s.password}>{formik.errors.password}</div>
      ) : null}
      <div>{formik.status}</div>
      <label htmlFor="rememberMe">RememberMe</label>
      {createField(
        "rememberMe",
        "rememberMe",
        "checkbox",
        formik.handleChange,
        formik.handleBlur,
        formik.values.rememberMe
      )}
      {captchaUrl && <img src={captchaUrl} alt={"captcha"} />}
      {captchaUrl && createField(
        "symbolFromImg",
        "captcha",
        "",
        formik.handleChange,
        formik.handleBlur,
        formik.values.captcha
      )}
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForms;
