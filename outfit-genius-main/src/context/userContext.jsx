// creating a user context

import { useState, createContext } from "react";
import axios from "axios";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [loggedIn, setIsLoggedIn] = useState(false);

  const signup = (data) => {
    // sending request to backend with axios
    axios
      .post("http://localhost:3000/auth/signup", data)
      .then((res) => {
        setMessage(res?.data?.message);
        setError(null);
      })
      .catch((err) => {
        setError(err?.response.data?.message);
      });
    setMessage(null);
  };

  const login = (data) => {
    // sending request to backend with axios
    axios
      .post("http://localhost:3000/auth/login", data)
      .then((res) => {
        setMessage(res?.data?.message);
        setUser(res?.data?.user);
        setError(null);
        setToken(res?.data.message);
        document.cookie = `token=${res?.data?.token}`;
      })
      .catch((err) => {
        setError(err?.response.data?.message);
        setMessage(null);
      });
  };

  const isLoggedIn = (token) => {
    // sending request to backend with axios
    axios
      .get("http://localhost:3000/auth/isLoggedIn", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        setIsLoggedIn(res?.data?.isLoggedIn);
        return res?.data;
      })
      .catch((err) => {
        setError(err?.response.data?.message);
        setMessage(null);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signup,
        login,
        message,
        error,
        setMessage,
        setError,
        isLoggedIn,
        loggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
