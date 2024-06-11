import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/auth/me', { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.log('Not logged in');
      }
    };

    checkUserLoggedIn();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/auth/login', { email, password }, { withCredentials: true });
      setUser(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://127.0.0.1:5000/api/auth/logout', {}, { withCredentials: true });
      setUser(null);
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
