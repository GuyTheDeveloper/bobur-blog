import React from "react";

export const InputContext = React.createContext();

export const InputProvider = ({ children }) => {
  const [query, setQuery] = React.useState("");

  return (
    <InputContext.Provider value={{ query, setQuery }}>
      {children}
    </InputContext.Provider>
  );
};
