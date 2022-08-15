import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const saveFormHandler = (entredData) => {
    const expenseData = {
      ...entredData,
      id: Math.random().toString(),
    };
    props.onAddNew(expenseData);
    setIsAdding(false);
  };
  const clickHandler = () => {
    setIsAdding(true);
  };
  const stopShowingForm = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding ? (
        <button onClick={clickHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveForm={saveFormHandler} canceling={stopShowingForm} />
      )}
    </div>
  );
};

export default NewExpense;
