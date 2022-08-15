import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.filterad.length === 0) {
    return <h2 className="expenses-list__fallback">Not Found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filterad.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
