import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalStates";
import { Transition } from "./Transition";

export const TransitionList = () => {
  const { transitions } = useContext(GlobalContext);

  return (
    <div className="transition-container">
      <h3>Histroy</h3>

      <ul className="list">
        {transitions.map((transition) => (
          <Transition transition={transition} key={transition.id} />
        ))}
      </ul>
    </div>
  );
};
