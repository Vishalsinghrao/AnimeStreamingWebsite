import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from "../config/config";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_BASE_URL}/register`, { email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(error => console.error(error));
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
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Register</button>
                    <Link to='/login'><h4>Already a User? <span>Login</span></h4></Link>
                </form>

            </div>
        </div>
    )
}

export default Signup
