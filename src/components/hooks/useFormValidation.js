import React from "react";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

function useFormValidation(initialState, validate, setActive) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [successMessage, setSuccessMessage] = React.useState('')
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setSubmitting(false);
        setValues(initialState);
        setActive(false)
      } else {
        setSubmitting(true);
      }
    }
  }, [errors]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    const noErrors = Object.keys(errors).length === 0;
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (noErrors) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values })
      })
      .then(() => setSuccessMessage('Your email has been sent someone will reach out to you shortly!'))
      .catch(error => console.log(error));
    }

    setSubmitting(true);
    event.preventDefault();
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
    successMessage
  };
}

export default useFormValidation;
