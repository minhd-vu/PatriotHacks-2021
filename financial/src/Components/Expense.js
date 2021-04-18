import { Col, Row, Container } from "react-bootstrap"
import { Clear } from '@material-ui/icons';
import { Button } from "bootstrap";
import { BudgetContext } from "../Contexts/BudgetContext"
import { useContext } from "react"

function Expense(props) {
    const { expenses, setExpenses, expenseTotal, setExpenseTotal } = useContext(BudgetContext)
    
    const handleClick = (e) => {
        setExpenses(expenses.filter((expense) => expense.id !== props.id))
        setExpenseTotal(expenseTotal - props.value)
    } 

    return (
        <div>
            <Container>
                <Row>
                    <Col><h5>{props.name}</h5></Col>
                    <Col><h5>${props.value}</h5></Col>
                    <Col><button onClick={handleClick}><Clear/></button></Col>
                </Row>             
            </Container>
        </div>
    );
}

export default Expense;