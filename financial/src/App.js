import React, { useState } from 'react';
import './App.css';
import Header from "./Components/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from "./Components/Budget"
import { BudgetContext } from "./Contexts/BudgetContext"

function App() {
  const [expenses, setExpenses] = useState({})
  const [expenseTotal, setExpenseTotal] = useState(0)
  return (
    <div>
      <BudgetContext.Provider value={{expenses, setExpenses, expenseTotal, setExpenseTotal}}>
        <Header />
        <Budget />
      </BudgetContext.Provider>
    </div>
  );
}

export default App;
