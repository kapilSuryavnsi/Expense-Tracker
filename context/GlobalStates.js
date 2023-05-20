import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialStates = {
  transitions: [
    { id: 0, text: "Food", amount: -20 },
    { id: 1, text: "Salary", amount: 450 },
    { id: 2, text: "Flower", amount: 30 },
    { id: 3, text: "Cigrate", amount: -30 }
  ]
};

// create Context

export const GlobalContext = createContext(initialStates);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [states, dispatch] = useReducer(AppReducer, initialStates);

  const addTransition = (transition) => {
    dispatch({
      type: "Add-transition",
      payload: transition
    });
  };

  const deleteTransition = (id) => {
    dispatch({
      type: "Delete-transition",
      payload: id
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transitions: states.transitions,
        addTransition,
        deleteTransition
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
