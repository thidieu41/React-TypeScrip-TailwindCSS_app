import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Name is required filed"),
  password: yup.string().required("Password is reuired filed"),
});

export const defaultValues = {
  password: "",
  name: "",
};
