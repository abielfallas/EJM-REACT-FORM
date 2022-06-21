import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../build/css/app.css";

const ResetPassword = () => {
  const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .required("Este campo es obligatorio")
      .min(8, "La contraseña debe tener minimo 8 caracteres")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    confirmpassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "La contraseña no coincide"
    ),
  });

  const handleSubmit = async (values) => {
    console.log(values);
    // try {
    //   const url = "http://localhost:4000/clientes";
    //   const response = await fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(values),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const resultado = await response.json();
    //   console.log(resultado);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div>
      <div className="senara-content-login senara-content-sm-login">
        <div className="senara-logo">
          <div className="senara-img-logo"></div>
        </div>

        <p className="senara-tagline">CAMBIAR CONTRASEÑA</p>

        <Formik
          initialValues={{
            password: "",
            confirmpassword: "",
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={ResetPasswordSchema}
        >
          {({ errors, touched }) => {
            return (
              <Form className="senara-form">
                <div className="senara-form-group">
                  <p
                    className="senara-form-group floating-label senara-description-page"
                    htmlFor="password"
                  ></p>
                  <Field
                    id="password"
                    type="password"
                    className="floating-input "
                    placeholder="Ingrese su nueva contraseña"
                    name="password"
                  />
                  {errors.password && touched.password ? (
                    <p className="alert-senara-error">{errors.password}</p>
                  ) : null}
                </div>

                <div className="senara-form-group">
                  <p
                    className="senara-form-group floating-label senara-description-page"
                    htmlFor="confirmpassword"
                  ></p>
                  <Field
                    id="confirmpassword"
                    type="password"
                    className="floating-input "
                    placeholder="Vuelva a Ingresar su contraseña"
                    name="confirmpassword"
                  />
                  {errors.confirmpassword && touched.confirmpassword ? (
                    <p className="alert-senara-error">
                      {errors.confirmpassword}
                    </p>
                  ) : null}
                </div>

                <input
                  type="submit"
                  value="Cambiar"
                  className="senara-btn-primary btn-center"
                />
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="senara-footer-decoration">
        <div className="decoration-logo"></div>
      </div>
    </div>
  );
};

export default ResetPassword;
