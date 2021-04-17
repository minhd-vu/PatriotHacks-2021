import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { UserContext } from "../contexts/user.context";
import EntryForm from "./entry/entry.form";

export default function Profile() {
    const user = useContext(UserContext);
    const history = useHistory();
    const [table, setTable] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(user)

        if (!user.isAuth) {
            return history.push("/login");
        }

        axios.get("/api/user/" + user.username, { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    setTable(res.data.entries?.slice(0).reverse().map(entry =>
                        <tr key={entry.createdAt}>
                            <td>{new Date(entry.createdAt).toLocaleString()}</td>
                            <td>{entry.desc}</td>
                            <td>{entry.hours}</td>
                            <td>{entry.amount}</td>
                        </tr>
                    ));
                    setError(false);
                } else if (res.status === 204) {
                    setError(true);
                }

            })
            .catch(err => {
                console.log(err);
            });
    }, [user]);

    return (
        <React.Fragment>
            <h3>{user.username}'s Sustainability Profile</h3>
            <EntryForm />
            {
                error ?
                    <Alert key="danger" variant="danger">No user found with username <b>{user.username}</b>.</Alert> :
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                                <th scope="col">Hours</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table}
                        </tbody>
                    </table>
            }
        </React.Fragment>
    );
}