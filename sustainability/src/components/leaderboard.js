import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        let isMounted = true;
        axios.get("/api/leaderboard", { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    isMounted && setPlayers(res.data.map(player =>
                        <tr key={player.username}>
                            <td>{player.rank}</td>
                        </tr>
                    ));
                }
            })
            .catch(err => {
                console.log(err);
            });
        return () => { isMounted = false };
    }, []);

    return (
        <React.Fragment>
            <h3>Leaderboard</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Column</th>
                    </tr>
                </thead>
                <tbody>
                    {players}
                </tbody>
            </table>
        </React.Fragment>
    );
}