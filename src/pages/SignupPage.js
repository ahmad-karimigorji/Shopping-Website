import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../component/formikInput/MyTextInput";
import { NavLink } from "react-router-dom";

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
  return (
    <div className="w-[300px] sm:w-[350px] mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount={true}
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
            <div>
              <button
                type="submit"
                disabled={!isValid}
                className="w-full bg-indigo-600 text-white rounded-md mt-4 px-3 py-1.5 disabled:bg-gray-300"
              >
                sign
              </button>
            </div>
            <NavLink to="/login" className="text-indigo-600 inline-block mt-2 py-1 text-sm">Already login?</NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupPage;
