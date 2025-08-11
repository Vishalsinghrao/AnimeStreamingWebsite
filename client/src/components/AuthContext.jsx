
import React, { createContext, useState,useEffect, useContext } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true; 


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
   const logout = () => {
  axios.post('http://localhost:4000/logout', {}, { withCredentials: true })
    .then(() => {
      setIsLoggedIn(false);
    })
    .catch((err) => {
      console.error('Logout failed:', err);
      setIsLoggedIn(false);
    });
};

    useEffect(() => {
    axios.get('http://localhost:4000/check-auth', { withCredentials: true })
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
