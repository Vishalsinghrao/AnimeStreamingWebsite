import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ProtectedRoute.css"
import Navbar from './Navbar';

const ProtectedRoute = ({ children }) => {
    const [authChecked, setAuthChecked] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:4000/check-auth', { withCredentials: true })
            .then(res => {
                setIsAuthenticated(res.data.isLoggedIn);
                setAuthChecked(true);
            })
            .catch(err => {
                setIsAuthenticated(false);
                setAuthChecked(true);
            });
    }, []);

    if (!authChecked) return <div>Loading...</div>;

    if (!isAuthenticated) {
        return (
            <>
            <Navbar/>
            <div className="protected-fallback">
                <div className="fallback-card">
                    <img
                        src="/bd900a9a994238168c8e843cc3a575a6.gif"
                        alt="Anime style login"
                        className="anime-img"
                    />
                    <h2>You need to log in to watch this anime!</h2>
                    <a href="/login">
                        <button className="login-btn">Login</button>
                    </a>
                </div>
            </div>
            </>
        );
    }

    return children;
};

export default ProtectedRoute;
