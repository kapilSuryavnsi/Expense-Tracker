import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalStates";

export const Balance = () => {
  const { transitions } = useContext(GlobalContext);
  const amounts = transitions.map((x) => x.amount);
  const totalBalance = amounts.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h1 id="balance">${totalBalance}</h1>
    </div>
  );
};
