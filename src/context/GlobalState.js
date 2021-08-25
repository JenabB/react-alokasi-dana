import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const initialState = {
  totalPendanaan: [],
  test: "ini test",
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={{ test: state.test }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
