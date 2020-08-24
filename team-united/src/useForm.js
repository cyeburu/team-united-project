import { useState, useEffect } from "react";

const UseForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    link1: "",
    link2: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };
  
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};
export default UseForm;
