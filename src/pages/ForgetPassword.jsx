import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../build/css/app.css";
// import Alerta from "../pages/Alerta";

const ForgetPassword = () => {
  const ForgetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email no valido")
      .required("El email es obligatorio"),
  });

  return (
    <>
      <div className="senara-content-principal senara-content-login senara-content-sm-login">
        <div className="senara-logo">
          <div className="senara-img-logo"></div>
        </div>

        <p className="senara-tagline">OLVIDASTE TU CONTRASEÑA</p>
        <p className="senara-description-page">
          Enviaremos un enlace de recuperación a:
        </p>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={ForgetPasswordSchema}
        >
          {({ errors, touched }) => {
            return (
              <Form className="senara-form">
                <div className="senara-form-group">
                  <label
                    className="senara-form-group floating-label"
                    htmlFor="email"
                  ></label>
                  <Field
                    id="email"
                    type="text"
                    className="floating-input "
                    placeholder="Ingrese su correo"
                    name="email"
                  />
                  {errors.email && touched.email ? (
                    <p className="alert-senara-error">{errors.email}</p>
                  ) : null}
                </div>
                <input
                  type="submit"
                  value="Enviar"
                  className="senara-btn-primary btn-center"
                />
                <p>Volver a iniciar sesion</p>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="senara-footer-decoration">
        <div className="decoration-logo"></div>
      </div>
    </>
  );
};

export default ForgetPassword;
