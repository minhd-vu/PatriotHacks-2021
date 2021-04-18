import { useState, useContext } from "react"
import { Form, FormGroup, Button } from "react-bootstrap"
import { BudgetContext } from "../Contexts/BudgetContext"

function Search() {

    const [text, setText] =  useState("")
    const { searchText, setSearchText } = useContext(BudgetContext)
    const setSearch = () => {
        setSearchText(text)
    }

    return (
        <Form>
            <FormGroup>
                <Form.Label>Search for news</Form.Label>
                <Form.Control onChange={ (e) => { setText(e.target.value) } } type="text" placeholder="Enter Keyword" />
            </FormGroup>
            <Button onClick={setSearch} variant="primary">Search</Button>
        </Form>
    );
}

export default Search