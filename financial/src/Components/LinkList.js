import { useEffect, useState, useContext } from "react"
import { BudgetContext } from "../Contexts/BudgetContext"


function LinkList() {

    const [links, setLinks] = useState([])
    const { searchText } = useContext(BudgetContext)

    useEffect(() => {
        fetch("http://localhost:5000/")
        .then(res => res.json())
        .then(data => setLinks(data))
    }, [searchText])
    return (
        <div>
            {
                links.map((link) => {
                    return (
                        <div>
                            <h1>{link.title}</h1>
                            <h1>{link.url}</h1>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default LinkList