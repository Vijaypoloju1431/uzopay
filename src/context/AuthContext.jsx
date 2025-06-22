import React, { createContext, useState, useEffect, useContext } from "react";

// Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState("login"); 

  // On app load, check localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("storedUser on load===>",storedUser)
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

const login = ({ email, password }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
   console.log("storedUser in login ===>",storedUser)
  if (
    storedUser &&
    storedUser.email === email &&
    storedUser.password === password
  ) {
    setUser(storedUser);
    setIsAuthenticated(true);
    return { success: true };
  } else {
     console.log("storedUser in else on login===>")
    return { success: false, message: "Invalid email or password" };
  }
};



const signup = ({ name, email, phone, password }) => {
  const existingUser = JSON.parse(localStorage.getItem("user"));
     console.log("existingUser in login signup===>",existingUser)
  if (existingUser && existingUser.email === email) {
    return { success: false, message: "Account already exists." };
  }

  const newUser = { name, email, phone, password };
     console.log("newUser in sign in ===>",newUser)
  localStorage.setItem("user", JSON.stringify(newUser));
  setUser(newUser);
  setIsAuthenticated(true);
  return { success: true };
};

  const logout = () => {
    console.log("clikced on logout")
    setUser(null);
    setIsAuthenticated(false);
    setShowModal(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        signup,
        logout,
        showModal,
        setShowModal,
        authMode,
        setAuthMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
