import Expense from "./Expense";
import { Col, Container, ListGroup, Row } from "react-bootstrap"
import { BudgetContext } from "../Contexts/BudgetContext"
import { useContext } from "react"

function ExpenseList() {
    const { expenses, setExpenses, expenseTotal, setExpenseTotal } = useContext(BudgetContext)
    return (
        <div>
            <ListGroup>
                {Object.keys(expenses).map(function(key, index) {return (
                <ListGroup.Item><Expense name={key} value={expenses[key]}/></ListGroup.Item>)})}
            </ListGroup>
            <Container>
                <Row>
                    { Object.keys(expenses).length !== 0 &&
                        <Col><h1>Total: ${expenseTotal}</h1></Col>
                    }
                </Row>
            </Container>
        </div>
    );
}

export default ExpenseList