import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Context.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
