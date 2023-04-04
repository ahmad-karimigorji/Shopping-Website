import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../component/formikInput/MyTextInput";
import { NavLink, useNavigate } from "react-router-dom";
import { signupUser } from "../services/signupService";
import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { useAuth } from "../context/AuthProvider/AuthProvider";
import LoadingButton from "../component/loading/LoadingButton";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .trim()
    .min(2, "should be 2 chars minimum"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is Required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{11}$/, "Phone number is not valid")
    .required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirm: Yup.string()
    .required("Password Confirmation is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignupPage = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const redirect = useQuery("redirect") || "/";
  const auth = useAuth();

  useEffect(() => {
    if (auth) {
      navigate(redirect);
    }
  }, []);

  const onSubmit = async (values) => {
    setLoading(true);
    const { name, email, phoneNumber, password } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      const { data } = await signupUser(userData);
      console.log(data);
      setLoading(false);
      setError(null);
      navigate(redirect === "/" ? "/login" : `/login?redirect=${redirect}`);
    } catch (error) {
      setLoading(false);
      console.log(error.response);
      if (error.response.data.message) {
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
              name="name"
              label="Name"
              type="text"
              placeholder="name"
            />
            <MyTextInput
              name="email"
              label="Email"
              type="email"
              placeholder="example@yahoo.com"
            />
            <MyTextInput
              name="phoneNumber"
              label="Phone Number"
              type="tel"
              placeholder="09111234567"
            />
            <MyTextInput
              name="password"
              label="Password"
              type="password"
              placeholder="*****"
            />
            <MyTextInput
              name="passwordConfirm"
              label="Password Confirmation"
              type="password"
              placeholder="*****"
            />
            <div className="flex flex-col">
              <button
                type="submit"
                disabled={!isValid}
                className="w-full flex justify-center items-center bg-indigo-600 text-white rounded mt-4 px-3 py-1.5 disabled:bg-gray-300"
              >
                {loading && <LoadingButton />} sign
              </button>
              {error && (
                <p className="text-red-400 inline-block mt-1.5 text-sm">
                  {error}
                </p>
              )}
              <NavLink
                to={redirect === "/" ? "/login" : `/login?redirect=${redirect}`}
                className="text-indigo-600 inline-block mt-1.5 py-1 text-sm"
              >
                Already login?
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupPage;
