import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../build/css/app.css";

const ResetPassword = () => {
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email no valid")
      .required("El email es obligatorio"),
  });

  return (
    <form>
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
                    <Alerta>{errors.password}</Alerta>
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
                    <Alerta>{errors.password}</Alerta>
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
    </form>
  );
};

export default ResetPassword;
