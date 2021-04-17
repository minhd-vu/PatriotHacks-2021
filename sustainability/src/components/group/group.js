import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import axios from "axios";
// import PartyLeave from "./party.leave";
// import Player from "../player/player";
// import PlayerList from "../player/player.list";
import useInterval from "../../hooks/useInterval";
import GroupLeave from "./group.leave";

export default function Group() {
    const user = useContext(UserContext);
    const [group, setGroup] = useState({});
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState("");
    const [delay, setDelay] = useState(0);

    useEffect(() => {
        axios.get("/api/group", { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    setGroup(res.data);
                    if (res.data && res.data.players) {
                        // setPlayers(res.data.players.map((player) =>
                        //     <Player
                        //         key={player.username}
                        //         player={player}
                        //         isStarted={res.data.isStarted}
                        //     />
                        // ));
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    });

    return (
        <div className="text-center">
            {
                error && <div className="alert alert-danger" role="alert">{error}</div>
            }
            <h4>Group Code: <b>{user.group}</b></h4>
            {/* <PlayerList players={players} /> */}
            <GroupLeave />
        </div>
    );
}