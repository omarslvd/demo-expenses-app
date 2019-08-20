import React from 'react';
import Budget from '../Budget/Budget';
import Add from '../Add/Add';
import Expenses from '../Expenses/Expense/Expense';
import useBudget from '../hooks/useBudget';
import './App.css';

const App: React.FC = () => {
  const { expenses, addExpense, deleteExpense } = useBudget();
  return (
    <div>
      <Budget expenses={expenses} />
      <Add expenses={expenses} addExpense={addExpense} />
      <Expenses expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
