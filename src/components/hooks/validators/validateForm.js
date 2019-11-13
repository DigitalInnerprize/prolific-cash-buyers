export function validateForm(values) {
  let errors = {};

  // Name Errors
  if (!values.name) {
    errors.name = "Required Name";
  }

  // Password Errors
  if (!values.phone) {
    errors.phone = "Required Phone Number";
  } else if (values.phone.length !== 10) {
    errors.phone = "Phone must be 10 characters including zip code";
  }

  // Email Errors
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}
