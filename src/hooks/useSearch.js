import React from "react";
import { InputContext } from "../contexts/input-context";

export const useSearch = () => {
  const { query, setQuery } = React.useContext(InputContext);

  return { query, setQuery };
};
