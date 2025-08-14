import React from 'react';
import '../Styles/Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <p>Fill in the details to get started</p>

      <form className="signup-form">
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="text" name="lastName" placeholder="Last Name" required />
        <input type="text" name="streetAddress" placeholder="Street Address" required />
        <input type="text" name="brgyAddress" placeholder="Barangay" required />
        <input type="text" name="city" placeholder="City" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
