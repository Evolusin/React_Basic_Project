import "./ExpenseForm.css";
import { useState } from "react";

function ExpesneForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmmount, setEnteredAmmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function ammountChangeHandler(event) {
    setEnteredAmmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      ammount: enteredAmmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Ammount</label>
          <input
            type="number"
            value={enteredAmmount}
            min="0.01"
            step="0.01"
            onChange={ammountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expanse</button>
      </div>
    </form>
  );
}

export default ExpesneForm;
