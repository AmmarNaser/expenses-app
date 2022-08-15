import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);
  const [title, setTitle] = useState(props.title);
  const [date] = useState(props.date);

  const amountChangeHndler = () => {
    setAmount(" Shit  ");
  };
  const titleChangeHndler = () => {
    setTitle("  ");
  };

  return (
    <li>
      {" "}
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
        <div className="buttons">
          <button onClick={titleChangeHndler}>Reset Title</button>
          <button onClick={amountChangeHndler}>Reset Amount</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
