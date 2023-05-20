import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalStates";

export const AddTransition = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const { addTransition } = useContext(GlobalContext);

  const addHistory = (e) => {
    e.preventDefault();
    const transition = { id: Date(), text: text, amount: +amount };

    if (text && amount) {
      addTransition(transition);
      setAmount("");
      setText("");
    }
  };

  return (
    <div className="add-transition-conatiner">
      <h3>Add new transition</h3>
      <form>
        <div className="form-control">
          <label className="text" htmlFor="text">
            Text
          </label>
          <input
            value={text}
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter text..."
            required
          />
        </div>

        <div className="form-control">
          <label className="amount" htmlFor="amount">
            Amount
          </label>
          <input
            value={amount}
            type="number"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter amount...."
            required
          />
        </div>

        <button type="submit" className="btn" onClick={addHistory}>
          Add transition
        </button>
      </form>
    </div>
  );
};
