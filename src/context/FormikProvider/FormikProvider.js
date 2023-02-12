import { useFormik } from "formik";
import { createContext } from "react";

export const FormikContext = createContext({});

const Formik = ({ children, ...props }) => {
  const formikStateAndHelpers = useFormik(props);
  return (
    <FormikContext.Provider value={formikStateAndHelpers}>
      {typeof children === "function"
        ? children(formikStateAndHelpers)
        : children}
    </FormikContext.Provider>
  );
};

export default Formik;
