import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import s from "./login.module.css";
import { createField } from "../common/FormsControls/FormsControl";

import { connect, useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import { Authorize } from '../api/authApi'


export const LoginForms: React.FC = () => {
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
      captcha: ""
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, "Must be at least 20 char")
        .required("Required"),
      email: Yup.string().email("Invalid Email").required("*Required"),
    }),
    onSubmit: (values: Authorize, { setSubmitting, setStatus }) => {
      dispatch(login(values, setStatus))
      setSubmitting(false);
    },
  });
  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email address</label>
      {createField(
        "email",
        "email",
        "email",
        formik.handleChange,
        formik.handleBlur,
        formik.values.email,
        '',
        s.login
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
        formik.values.password,
        '',
        s.login
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

