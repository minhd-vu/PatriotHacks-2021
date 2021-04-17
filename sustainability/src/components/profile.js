import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

export default function Profile(props) {
    const { username } = props.match.params;
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        let isMounted = true;
        axios.get("/api/user/" + username, { withCredentials: true })
            .then(res => {
                if (isMounted) {
                    if (res.status === 200) {
                        setUser(res.data);
                        setError(false);
                    } else if (res.status === 204) {
                        setError(true);
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
        return () => { isMounted = false };
    }, [username]);

    return (
        <React.Fragment>
            <h3>Profile</h3>
            {
                error ?
                    <Alert key="danger" variant="danger">No user found with username <b>{username}</b>.</Alert> :
                    <table className="table">
                    </table>
            }
        </React.Fragment>
    );
}