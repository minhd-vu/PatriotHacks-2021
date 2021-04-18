import { BudgetContext } from "../Contexts/BudgetContext"
import { useContext, useState } from "react"
import { Card, Form, FormGroup, Button } from "react-bootstrap"
import CurrencyInput from 'react-currency-input-field';

function BudgetEntry() {

    const [budget, setBudget] = useState(0)
    const { budgetTotal, setBudgetTotal } = useContext(BudgetContext)

    const set = (e) => {
        setBudgetTotal(budget)
    }

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Form>
                <FormGroup>
                    <Form.Label>Budget Total</Form.Label>
                    <CurrencyInput
                        id="input-example"
                        name="input-name"
                        placeholder="Please enter your monthly budget"
                        defaultValue={0}
                        onValueChange={(value) =>  { setBudget(parseFloat(value)); }}
                        decimalsLimit={2}
                        prefix={"$"}
                    />
                </FormGroup>
                <Button onClick={set} variant="primary">Set</Button>
            </Form>
            
        </Card.Body>
        </Card> 
    );
}

export default BudgetEntry;