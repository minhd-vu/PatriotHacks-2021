import React, { useEffect, useState } from "react";
import axios from "axios";
import Statistics from "./statistics";
import Map from "./map";

export default function Leaderboard() {
    const [users, setUsers] = useState([]);
    const [stats, setStats] = useState({});

    useEffect(() => {
        axios.get("/api/leaderboard", { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    // console.log(res.data);

                    if (res.data) {
                        setUsers(res.data.map((e, i) => (
                            <tr key={e.username}>
                                <td>{i + 1}</td>
                                <td>{e.username}</td>
                                <td>{e.hours.toFixed(1)}</td>
                                <td>{e.bags.toFixed(1)}</td>
                            </tr>
                        )));

                        let totalHours = 0;
                        let totalBags = 0;

                        res.data.forEach(e => {
                            totalHours += e.hours;
                            totalBags += e.bags;
                        });

                        setStats({
                            totalUsers: res.data.length,
                            totalHours: totalHours.toFixed(1),
                            totalBags: totalBags.toFixed(1),
                        });
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <React.Fragment>
            <Statistics {...stats} />
            <br />
            <Map />
            <br />
            <h3>Leaderboard</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Username</th>
                        <th scope="col">Hours</th>
                        <th scope="col">Bags</th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
        </React.Fragment>
    );
}