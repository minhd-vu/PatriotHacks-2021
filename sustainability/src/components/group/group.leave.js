import { UserContext } from "../../contexts/user.context";
import React, { useContext } from "react";
import axios from "axios";

export default function GroupLeave() {
    const user = useContext(UserContext);

    function onLeaveGroup(e) {
        e.preventDefault();

        axios.get("/api/leave", { withCredentials: true })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    user.setGroup("");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <React.Fragment>
            <br />
            <form onSubmit={onLeaveGroup}>
                <div className="form-group">
                    <input type="submit" value="Leave Group" className="btn btn-primary" />
                </div>
            </form>
        </React.Fragment>
    );
}