import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Leaderboard() {
    const [users, setUsers] = useState([]);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        axios.get("/api/leaderboard", { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);

                    if (res.data) {
                        setUsers(res.data.map((e, i) => (
                            <tr key={e.username}>
                                <td>{i + 1}</td>
                                <td>{e.username}</td>
                                <td>{e.hours}</td>
                                <td>{e.amount}</td>
                            </tr>
                        )));

                        let totalHours = 0;
                        let totalAmount = 0;

                        res.data.forEach(e => {
                            totalHours += e.hours;
                            totalAmount += e.amount;
                        });

                        setStats(
                            <tr>
                                <td>{res.data.length}</td>
                                <td>{totalHours}</td>
                                <td>{totalAmount}</td>
                            </tr>
                        );
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <React.Fragment>
            <h3>Statistics</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Total Users</th>
                        <th scope="col">Total Hours</th>
                        <th scope="col">Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {stats}
                </tbody>
            </table>
            <h3>Leaderboard</h3>
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
        </React.Fragment>
    );
}