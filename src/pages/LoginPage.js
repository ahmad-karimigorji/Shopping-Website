import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../component/formikInput/MyTextInput";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../services/loginService";
import { useState } from "react";
import { useAuthActions } from "../context/AuthProvider/AuthProvider";
import { useQuery } from "../hooks/useQuery";
import LoadingButton from "../component/loading/LoadingButton";

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuthActions();
  const redirect = useQuery("redirect") || "/";

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const { data } = await loginUser(values);
      setLoading(false);
      setAuth(data);
      setError(null);
      navigate(redirect);
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="w-full max-w-[450px] mx-auto">
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
                className="w-full bg-indigo-600 text-white rounded mt-4 px-3 py-1.5 flex justify-center items-center disabled:bg-gray-300"
              >
                {loading && <LoadingButton />} login
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
