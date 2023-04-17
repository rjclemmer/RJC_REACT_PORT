import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Perform validation
    let errors = {};
    let isValid = true;

    if (!name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!message) {
      errors.message = 'Message is required';
      isValid = false;
    }

    if (!isValid) {
      setFormErrors(errors);
    } else {
      // Submit the form
      // ... Your code to submit the form data goes here ...
      console.log('Form data:', formData);
    }
  };

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Hi, I just met you and this is crazy, but here's my contact, so call me maybe?
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={`form-control ${formErrors.name && 'is-invalid'}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`form-control ${formErrors.email && 'is-invalid'}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className={`form-control ${formErrors.message && 'is-invalid'}`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
