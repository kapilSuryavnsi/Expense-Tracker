import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalStates";

export const Transition = ({ transition }) => {
  const { deleteTransition } = useContext(GlobalContext);

  const Delete = (e) => {
    e.preventDefault();
    deleteTransition(transition.id);
  };

  const sign = transition.amount < 0 ? "-" : "+";
  const clas = transition.amount < 0 ? "minus" : "plus";

  return (
    <li className={clas} key={transition.id}>
      {transition.text}
      <span>
        {sign}${Math.abs(transition.amount)}{" "}
        <button onClick={Delete} className="btn delete-btn">
          X
        </button>
      </span>
    </li>
  );
};
