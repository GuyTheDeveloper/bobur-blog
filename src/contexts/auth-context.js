import React from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const localToken = localStorage.getItem("token");
  const [token, setToken] = React.useState(
    localToken ? JSON.parse(localToken) : ""
  );

  React.useEffect(() => {
    if (token) {
      return localStorage.setItem("token", JSON.stringify(token));
    }
    localStorage.removeItem("token");
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
