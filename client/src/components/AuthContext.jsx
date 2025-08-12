
import React, { createContext, useState,useEffect, useContext } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config/config';
axios.defaults.withCredentials = true; 


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
   const logout = () => {
  axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true })
    .then(() => {
      setIsLoggedIn(false);
    })
    .catch((err) => {
      console.error('Logout failed:', err);
      setIsLoggedIn(false);
    });
};

    useEffect(() => {
    axios.get(`${API_BASE_URL}/check-auth`, { withCredentials: true })
      .then(res => {
        if (res.data.isLoggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(err => {
        console.error('Auth check failed:', err);
        setIsLoggedIn(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
