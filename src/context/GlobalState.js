import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  totalDana: [],
  test: "ini test",
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function getTotalDana(dana) {
    dispatch({
      type: "GET_TOTAL_DANA",
      payload: dana,
    });
  }
  return (
    <GlobalContext.Provider value={{ test: state.test, getTotalDana }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
