import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here
    // After successful login, redirect to home or desired page
    navigate('/home'); // Change '/home' to the route you want to navigate to
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-container">
          <input type="text" placeholder="Email or Username" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-btn bounce" onClick={handleLogin}>Log In</button>
        <div className="register-redirect">
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
