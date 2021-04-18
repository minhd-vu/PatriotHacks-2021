import Expense from "./Expense";
import { Col, Container, ListGroup, Row } from "react-bootstrap"
import { BudgetContext } from "../Contexts/BudgetContext"
import { useContext } from "react"

function ExpenseList() {
    const { expenses, setExpenses, expenseTotal, setExpenseTotal, budgetTotal } = useContext(BudgetContext)
    return (
        <div>
            <ListGroup>
                {expenses.map(function(expense) {return (
                <ListGroup.Item><Expense name={expense.name} value={expense.value} id={expense.id}/></ListGroup.Item>)})}
            </ListGroup>
            <Container>
                <Row>
                    { expenses.length !== 0 &&
                        <Col><h1>Total: ${budgetTotal.toFixed(2) - expenseTotal.toFixed(2)}</h1></Col>
                    }
                </Row>
            </Container>
        </div>
    );
}

export default ExpenseList