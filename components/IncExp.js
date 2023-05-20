import React, { useCallback, useContext } from "react";
import { GlobalContext } from "../context/GlobalStates";

export const IncomeExpense = () => {
  const { transitions } = useContext(GlobalContext);
  const amounts = transitions.map((x) => x.amount);
  const income = amounts
    .filter((x) => x > 0)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  const expense = amounts
    .filter((x) => x < 0)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  return (
    <div className="inc-exp-container">
      <div className="inc-conatiner">
        <h4>Income</h4>
        <p id="money-plus" className="money">
          +${income}
        </p>
      </div>
      <div className="divider"></div>
      <div className="exp-container">
        <h4>Expense</h4>
        <p id="money-minus" className="money">
          -${Math.abs(expense)}
        </p>
      </div>
    </div>
  );
};
