import { useField } from "formik";

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-bold" htmlFor={props.id || props.name}>
        {label}
      </label>
      <select
        className="border px-2 py-1.5 focus:outline-indigo-600 rounded-md"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-400 text-xs">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MySelect;
