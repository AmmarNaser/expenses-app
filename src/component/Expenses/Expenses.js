import React, { useState } from "react";
import Card from "../UI/Card";
import EpensesChart from "./EpensesChart";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterd, setFilterd] = useState();

  const changeFilter = (selectedYear) => {
    setFilterd(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterd;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter onChoice={changeFilter} selected={filterd} />
      <EpensesChart expenses={filteredExpenses} />
      <ExpensesList filterad={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
