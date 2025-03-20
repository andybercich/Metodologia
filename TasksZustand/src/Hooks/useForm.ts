import { ChangeEvent, useState } from "react";

interface FormValue {
  [key: string]: string | number | boolean| Date;
}

export const useForm = <T extends FormValue>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name, type } = event.target;

    let newValue: string | number | boolean | Date= value;

    if (type === "number") {
      newValue = Number(value);
    } else if (type === "checkbox") {
      newValue = (event.target as HTMLInputElement).checked;
    }

    setValues({ ...values, [name]: newValue });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
};
