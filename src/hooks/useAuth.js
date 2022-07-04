import React from "react";
import { AuthContext } from "../contexts/auth-context";

export const useAuth = () => {
  const { token, setToken } = React.useContext(AuthContext);

  return { token, setToken };
};
