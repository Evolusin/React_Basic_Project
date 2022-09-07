import "./ExpenseItem.css";

function ExpenseItem() {
  const expanseDate = new Date(2021, 2 ,25);
  const expanseTitle = "Ubezpieczenie";
  const expenseAmmount = 295.22;

  return (
    <div className="expense-item">
      <div>{expanseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expanseTitle}</h2>
        <div className="expense-item__price">{expenseAmmount} zł</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
