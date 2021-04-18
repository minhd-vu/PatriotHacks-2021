import React, { useContext, useState } from "react"
import { Card, Button, Form, FormGroup } from "react-bootstrap"
import CurrencyInput from 'react-currency-input-field';
import { BudgetContext } from '../Contexts/BudgetContext'


function ExpenseAdder(props) {
    const [expenseInput, setExpenseInput] = useState(0)
    const [expenseNameInput, setExpenseNameInput] = useState("")
    const { expenses, setExpenses, expenseTotal, setExpenseTotal, setBudgetTotal } = useContext(BudgetContext);

    const expenseNameInputHandler = (e) => {
        setExpenseNameInput(e.target.value)
    }

    const expenseInputHandler = (e) => {
        setExpenseInput(e.target.value)
    }

    const addExpense = () => {
        if (expenses.length >= 1) {
            setExpenses([...expenses, {id: expenses[expenses.length - 1].id + 1, name: expenseNameInput, value: expenseInput}])
        } else {
            setExpenses([...expenses, {id: 1, name: expenseNameInput, value: expenseInput}])
        }
        setExpenseTotal(expenseInput + expenseTotal);
    }

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Form>
                <FormGroup>
                    <Form.Label>Expense Name</Form.Label>
                    <Form.Control onChange={ expenseNameInputHandler } type="text" placeholder="Enter Expense Name" />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Expense Total</Form.Label>
                    <CurrencyInput
                        id="input-example"
                        name="input-name"
                        placeholder="Please enter a number"
                        defaultValue={0}
                        onValueChange={(value) =>  { setExpenseInput(parseFloat(value)); }}
                        decimalsLimit={2}
                        prefix={"$"}
                    />
                </FormGroup>
                <Button onClick={addExpense} variant="primary">Add</Button>
                <Button id="reset" onClick={(e) => { setBudgetTotal(0); setExpenses([]); }} variant="primary">Reset Budget</Button>
            </Form>
            
        </Card.Body>
        </Card>        
    );

}

export default ExpenseAdder;