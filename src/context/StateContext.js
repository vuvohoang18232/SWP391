import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [activePage, setActivePage] = useState("home");

  return (
    <Context.Provider
      value={{
        activePage,
        setActivePage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
