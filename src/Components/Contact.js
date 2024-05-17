import React, { useState } from 'react';
import oops from "../images/icon-error.svg";

function Contact() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formValid, setFormValid] = useState(false);

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/; // Email address pattern
    return pattern.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      setFormValid(true);
      setErrorMessage('');
      // Reset form after successful submission (if needed)
      setEmail('');
    } else {
      setFormValid(false);
      setErrorMessage('Whoops, make sure it\'s an email');
    }
  };

  return (
    <section className="contact">
      <h3>35,000+ already joined</h3>
      <h4>Stay up-to-date with what we’re doing</h4>

      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          required
          placeholder="Enter your email address"
          className={`input ${formValid ? 'valid' : 'invalid'}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <img src={oops} alt="error icon" className="error" style={{ opacity: errorMessage ? 1 : 0 }} />
        <button type="submit">Contact Us</button>
        <span id="alert">{errorMessage}</span>
      </form>
    </section>
  );
}

export default Contact;
