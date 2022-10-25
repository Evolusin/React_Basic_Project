import "./NewExpense.css";
import ExpesneForm from "./ExpenseForm";

function NewExpanse(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }
  

  return (
    <div className="new-expense">
      <ExpesneForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpanse;
