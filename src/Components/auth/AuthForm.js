import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginOperation } from "../../redux/auth/authOperation";
import schema from "../validator/validator";

const AuthForm = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white max-w-5xl p-8 md:p-12 m-auto mt-28 rounded-lg shadow-2xl">
      <div className="w-full md:w-full lg:w-full flex shadow-2xl">
        <div
          className="w-full h-auto bg-gray-400 hidden md:block w-1/2 bg-cover lg:w-1/2 bg-cover rounded-l-lg"
          style={{
            backgroundImage: `url("https://source.unsplash.com/K4mSJ7kc0As/600x800")`,
          }}
        />
        <div className="w-full md: bg-white p-5 rounded-lg lg:w-1/2 rounded-l-none ">
          <h1 className="text-gray-600 text-center font-black lg:text-4xl">
            Member Login
          </h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={schema}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values) => {
              dispatch(loginOperation(values));
            }}
          >
            <div className="mt-10">
              <Form className="flex flex-col">
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                    type="email"
                    name="email"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Field
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                    type="password"
                    name="password"
                  />
                  <ErrorMessage name="password" component="div" />
                </div>

                <button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                  type="submit"
                >
                  LOGIN
                </button>
                <div className="flex justify-end flex-col">
                  <Link
                    className="text-sm text-purple-600 hover:text-red-700 hover:underline mb-3 pt-6"
                    to="#"
                  >
                    Forgot UserName / Password?
                  </Link>
                  <Link
                    className="text-sm text-purple-600 hover:text-red-700 hover:underline mb-3"
                    to="#"
                  >
                    Create your Account...
                  </Link>
                </div>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
