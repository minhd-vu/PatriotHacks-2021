import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from "./Components/Budget"
import { BudgetContext } from "./Contexts/BudgetContext"
import News from "./Components/News"

function App() {
  const [expenses, setExpenses] = useState([])
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [budgetTotal, setBudgetTotal] = useState(0)
  const [searchText, setSearchText] =  useState("")

  return (
    <div>
      <Router>
        <BudgetContext.Provider value={{expenses, setExpenses, expenseTotal, setExpenseTotal, budgetTotal, setBudgetTotal, searchText, setSearchText}}>
          <Header />
            <Switch>
              <Route path="/" exact component={() => <Budget />}></Route>
              <Route path="/news" exact component={() => <News />}></Route>
            </Switch>
        </BudgetContext.Provider>
      </Router>
    </div>
  );
}

export default App;
