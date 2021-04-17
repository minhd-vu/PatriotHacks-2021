import { Col, Row, Container } from "react-bootstrap"
import { Clear } from '@material-ui/icons';
import { Button } from "bootstrap";
import { BudgetContext } from "../Contexts/BudgetContext"
import { createContext } from "react"

function Expense(props) {
    const { expenses, setExpenses } = createContext(BudgetContext)
    
    const handleClick = (e) => {
        
    } 

    return (
        <div>
            <Container>
                <Row>
                    <Col><h5>{props.name}</h5></Col>
                    <Col><h5>${props.value}</h5></Col>
                    <Col><button><Clear/></button></Col>
                </Row>             
            </Container>
        </div>
    );
}

export default Expense;