import ExpenseAdder from "./ExpenseAdder"
import ExpenseList from "./ExpenseList"
import { Container, Row, Col } from "react-bootstrap"

function Budget() {
    return (
        <div>
            <Container>
                <Row>
                    <Col><ExpenseAdder /></Col>
                    <Col><ExpenseList /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Budget;