import { AddTransition } from "../components/AddTransition";
import { Balance } from "../components/balance";
import { Header } from "../components/header";
import { IncomeExpense } from "../components/IncExp";
import { TransitionList } from "../components/TransitionList";
import { GlobalProvider } from "../context/GlobalStates";
import "./styles.css";

export default function App() {
  return (
    <div className="ui-container">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransitionList />
        <AddTransition />
      </GlobalProvider>
    </div>
  );
}
