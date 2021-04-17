import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import axios from "axios";
import EntryForm from "../entry/entry.form"
import GroupLeave from "./group.leave";

export default function Group() {
    const user = useContext(UserContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/api/group", { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);

                    res.data && setUsers(res.data.map((e, i) => (
                        <tr key={e.username}>
                            <td>{i + 1}</td>
                            <td>{e.username}</td>
                            <td>{e.hours}</td>
                            <td>{e.amount}</td>
                        </tr>
                    )));
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="text-center">
            {/* {
                error && <div className="alert alert-danger" role="alert">{error}</div>
            } */}
            <h4>Group: <b>{user.group}</b></h4>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Username</th>
                        <th scope="col">Hours</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
            <GroupLeave />
        </div>
    );
}