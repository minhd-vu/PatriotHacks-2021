import axios from "axios";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

export default function GroupJoin(props) {
    const user = useContext(UserContext);
    const [group, setGroup] = useState("");
    const history = useHistory();

    function onJoinGroup(e) {
        e.preventDefault();

        axios.get("/api/join/" + group.trim(), { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    user.setGroup(res.data.code);
                }
            })
            .catch(err => {
                console.log(err);
                if (err.response.status === 401) {
                    history.push("/login");
                } else {
                    props.setError(err.response.data);
                }
            });
    }

    return (
        <form onSubmit={onJoinGroup}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    required
                    value={group}
                    onChange={e => setGroup(e.target.value)}
                    placeholder="Group"
                />
            </div>
            <div className="form-group">
                <input type="submit" value="Join Group" className="btn btn-primary" />
            </div>
        </form>
    );
}