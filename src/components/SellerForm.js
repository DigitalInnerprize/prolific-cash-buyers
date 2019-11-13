import React from 'react';
import cx from 'classnames';

import useFormValidation from './hooks/useFormValidation';
import { validateForm } from "./hooks/validators/validateForm";

const INITIAL_STATE = {
  name: "",
  phone: "",
  email: "",
};

const SellerForm = () => {
  const [active, setActive] = React.useState(false);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
    successMessage
  } = useFormValidation(INITIAL_STATE, validateForm, setActive);

  return (
    <div className="seller-form-container">
      <div className="content-container">
      <div className="title-banner">
      <h1 className="intro-title">Prolific Cash Buyers</h1>
      <h3 className="intro-sub-title">Do you need help selling your unwanted property fast? Or maybe you need to sell for quick cash for your next move... whatever the case may be we will take that property off you head and shoulders if the price is right!</h3>
      </div>
      {successMessage && 
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      }
      <div className="envelope-wrapper">
        <div className={cx("envelope", {
          'active' : active
        })}>
          <div className="envelope-top"></div>
          <div className="card"> 
            <form
              name="contact"
              method="post"
              netlify
              onSubmit={handleSubmit}
              >
              <div className="half-input-container">
              <input 
                className="half-input"
                placeholder="Name" 
                name="name" 
                type="text" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <div>
              <input 
                className={cx("half-input", {
                  'error-input': errors.phone
                })}
                placeholder="Phone"
                name="phone"
                type="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
              </div>
              </div>
              <div>
              <input 
                className={cx("full-input", {
                  'error-input': errors.email
                })}
                placeholder="Email" 
                name="email" 
                type="email" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <textarea className="message-content" name="comment" placeholder="Property address and features..." aria-required="true"></textarea>
              <button disabled={isSubmitting} className="send-button">Send Email</button>
            </form>
          </div>
          </div>
        <span className="email-button" onClick={() => setActive(!active)}>
          { active ? 'close me' : 'open me'}
        </span>
      </div>
      </div>
    </div>
  )
}

export default SellerForm;
