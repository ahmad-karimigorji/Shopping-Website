import { useField } from "formik";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-bold" htmlFor={props.id || props.name}>
        {label}
      </label>
      {props.type === "password" ? (
        <div className="flex relative overflow-hidden rounded-md">
          <input
            className="w-full border pl-2 pr-8 py-1.5 focus:outline-gray-300 rounded-md"
            {...field}
            {...props}
            type={isShow ? "text" : "password"}
          />
          <button
            type="button"
            onClick={() => setIsShow(!isShow)}
            className="absolute top-1/2 -translate-y-1/2 right-0 p-2 outline-none text-gray-500 text-sm"
          >
            {isShow ? <BsEye /> : <BsEyeSlash />}
          </button>
        </div>
      ) : (
        <input
          className="border px-2 py-1.5 focus:outline-gray-300 rounded-md"
          {...field}
          {...props}
        />
      )}
      {meta.touched && meta.error ? (
        <div className="text-red-400 text-xs">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextInput;
