import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../components/AuthContext';
import API_BASE_URL from '../config/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${API_BASE_URL}/login`, { email, password }, { withCredentials: true })
      .then(result => {
        if (result.data === "Success") {
          toast.success('Login successful! Redirecting...');
          login();
          setTimeout(() => {
            navigate('/anime');
          }, 1500);
        } else {
          toast.error('No such user exists, please Signup.');
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          toast.error('Invalid email or password.');
        } else {
          toast.error('An unexpected error occurred. Please try again.');
        }
        console.error(error);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <button type="submit">Log in</button>

        <Link to='/signup'>
          <h4>Not a user? <span>Sign up</span></h4>
        </Link>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
