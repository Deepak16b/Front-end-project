import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Add your registration logic here
    // After successful registration, redirect to login or desired page
    navigate('/login'); // Change '/login' to the route you want to navigate to
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <div className="input-container">
          <input type="text" placeholder="Email" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button className="register-btn bounce" onClick={handleRegister}>Register</button>
        <div className="login-redirect">
          <p>
            Already have an account? <Link to="/login">Log in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
