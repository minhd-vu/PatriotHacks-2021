import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { UserContext } from "../contexts/user.context";
import EntryForm from "./entry/entry.form";

export default function Profile(props) {
    const user = useContext(UserContext);
    const [table, setTable] = useState([]);
    const [username, setUsername] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        let username = props.match?.params?.username || user.username;
        setUsername(username);

        axios.get("/api/user/" + username, { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    setTable(res.data.entries?.slice(0).reverse().map(entry =>
                        <tr key={entry.createdAt}>
                            <td>{new Date(entry.createdAt).toLocaleString()}</td>
                            <td>{entry.location}</td>
                            <td>{entry.hours}</td>
                            <td>{entry.bags}</td>
                        </tr>
                    ));
                    setError(false);
                } else if (res.status === 204) {
                    setError(true);
                }
            })
            .catch(err => console.log(err));
    }, [username, props]);

    return (
        <React.Fragment>
            <h3>{username}'s Sustainability Profile</h3>
            {
                user.username === username && <EntryForm />
            }
            {
                error ?
                    <Alert key="danger" variant="danger">No user found with username <b>{username}</b>.</Alert> :
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Location</th>
                                <th scope="col">Hours</th>
                                <th scope="col">Bags</th>
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