import { useCart } from "../context/CartProvider/CartProvider";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../component/formikInput/MyTextInput";
import MySelect from "../component/formikInput/MySelect";
import MultiStepsComponent from "../component/multiStepsComponent/MultiStepsComponent";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const initialValues = {
  name: "",
  country: "",
  streetAddress: "",
  city: "",
  zipCode: "",
  email: "",
  phoneNumber: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .trim()
    .min(2, "should be 6 chars minimum"),
  country: Yup.string()
    .oneOf(["Iran", "Germany", "USA", "other"], "Invalid Job Type")
    .required("Country is Required"),
  streetAddress: Yup.string()
    .required("Street address is Required")
    .trim()
    .min(2, "should be 5 chars minimum"),
  city: Yup.string()
    .required("City is Required")
    .trim()
    .min(2, "should be 2 chars minimum"),
  zipCode: Yup.string()
    .required("Zip Code is Required")
    .matches(/^[0-9]{5}$/, "Must be exactly 5 digits"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is Required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{11}$/, "Phone number is not valid")
    .required("Email is Required"),
});

const CheckoutPage = () => {
  const { cart, total } = useCart();

  if (cart.length === 0)
    return (
      <Link
        to="/shop"
        className="w-max flex justify-center items-center mx-auto text-indigo-600 hover:font-semibold"
      >
        <span className="mr-2">Go Shop</span> <HiOutlineArrowNarrowRight />
      </Link>
    );

  return (
    <>
      <MultiStepsComponent />
      <h2 className="font-bold pb-5">Billing details</h2>
      <div className="md:flex md:space-x-8">
        <div className="w-full space-y-1.5 lg:w-2/3 pb-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnMount={true}
            //   onSubmit={onSubmit}
          >
            {({ isValid }) => (
              <Form className="w-full px-2 space-y-3">
                <MyTextInput
                  name="name"
                  label="Name"
                  type="text"
                  placeholder="name"
                />
                <MySelect name="country" label="Country / Region">
                  <option className="text-gray-500" value="">
                    Select your Country
                  </option>
                  <option value="Iran">Iran</option>
                  <option value="Germany">Germany</option>
                  <option value="USA">USA</option>
                </MySelect>
                <MyTextInput
                  name="streetAddress"
                  label="Street address"
                  type="text"
                  placeholder="House number and street name"
                />
                <MyTextInput
                  name="city"
                  label="Town / City"
                  type="text"
                  placeholder=""
                />
                <MyTextInput
                  name="zipCode"
                  label="Zip Code"
                  type="text"
                  placeholder=""
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
                <div className="flex flex-col">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="w-full bg-indigo-600 text-white rounded mt-4 px-3 py-1.5 disabled:bg-gray-300"
                  >
                    Confirm
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <YourOrder cart={cart} total={total} />
      </div>
    </>
  );
};

export default CheckoutPage;

const YourOrder = ({ cart, total }) => {
  const origineTotal = cart.length
    ? cart.reduce((accu, curr) => accu + curr.price * curr.quantity, 0)
    : 0;
  return (
    <div className="h-max md:min-w-[300px] lg:w-1/3 border border-gray-200 rounded p-2.5">
      <h2 className="font-bold mb-3">Your Order</h2>
      <div className="w-full flex justify-between mb-1.5 font-semibold">
        <span>Product</span>
        <span className="">Subtotal</span>
      </div>
      <div className="px-3.5">
        {cart.map((item) => (
          <div
            key={item._id}
            className="w-full flex justify-between mb-1.5 font-semibold text-sm"
          >
            <span>
              {item.name} * {item.quantity}
            </span>
            <span className="text-indigo-600">
              $ {item.price * item.quantity}
            </span>
          </div>
        ))}
        <div className="w-full flex justify-between mb-1.5 font-semibold text-sm">
          <span>cart total</span>
          <span className="text-indigo-600">$ {origineTotal}</span>
        </div>
        <div className="w-full flex justify-between font-semibold text-sm">
          <span>cart discount</span>
          <span className="text-indigo-600">$ {origineTotal - total}</span>
        </div>
        <div className="w-full flex justify-between border-t border-gray-200 mt-5 pt-1 font-semibold">
          <span>net price</span>
          <span className="text-indigo-600">$ {total}</span>
        </div>
      </div>
    </div>
  );
};
