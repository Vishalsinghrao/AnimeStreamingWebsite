import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import API_BASE_URL from "../config/config";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    axios.post(`${API_BASE_URL}/register`, { email, password })
      .then(result => {
        setSuccessMsg('Account successfully created! Redirecting to login...');
        // Redirect after 2 seconds
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setErrorMsg(error.response.data.message || "Registration failed.");
        } else {
          setErrorMsg("An unexpected error occurred. Please try again.");
        }
        console.error(error);
      });
  };

  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign up</h2>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit">Register</button>

          {/* Show success or error message */}
          {successMsg && <p className="success-message">{successMsg}</p>}
          {errorMsg && <p className="error-message">{errorMsg}</p>}

          <Link to='/login'>
            <h4>Already a User? <span>Login</span></h4>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
