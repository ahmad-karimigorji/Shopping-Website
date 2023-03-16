import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../component/formikInput/MyTextInput";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../services/loginService";
import { useState } from "react";
import { useAuthActions } from "../context/AuthProvider/AuthProvider";
import { useQuery } from "../hooks/useQuery";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const LoginPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setAuth = useAuthActions();
  const redirect = useQuery("redirect") || "/";

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      console.log(data);
      setError(null);
      navigate(redirect);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="w-[300px] sm:w-[350px] mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount={true}
        onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <Form className="w-full px-2 space-y-3">
            <MyTextInput
              name="email"
              label="Email"
              type="email"
              placeholder="example@yahoo.com"
            />
            <MyTextInput
              name="password"
              label="Password"
              type="password"
              placeholder="*****"
            />
            <div className="flex flex-col">
              <button
                type="submit"
                disabled={!isValid}
                className="w-full bg-indigo-600 text-white rounded-md mt-4 px-3 py-1.5 disabled:bg-gray-300"
              >
                login
              </button>
              {error && (
                <p className="text-red-400 inline-block mt-1.5 text-sm">
                  {error}
                </p>
              )}
              <NavLink
                to={
                  redirect === "/" ? "/signup" : `/signup?redirect=${redirect}`
                }
                className="text-indigo-600 inline-block mt-1.5 py-1 text-sm"
              >
                Not signup yet?
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
