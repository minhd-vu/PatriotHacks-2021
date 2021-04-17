import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../contexts/user.context";

export default function Login() {
    const history = useHistory();
    const user = useContext(UserContext);
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function onSubmit(e) {
        e.preventDefault();

        axios.post("/api/login", {
            username: username.trim().toLowerCase(),
            password: password,
        }, { withCredentials: true })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    user.setAuth(true);
                    user.setUsername(res.data.username);
                    user.setGroup(res.data.group);
                    history.push("/");
                }
            })
            .catch(err => {
                console.log(err);
                if (err.response.status === 401) {
                    setError("Invalid username and/or password.");
                }
            });
    }

    return (
        <div>
            <h3>Login</h3>
            {
                error && <div className="alert alert-danger" role="alert">{error}</div>
            }
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input
                        type="password"
                        required
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" className="btn btn-success" />
                </div>
            </form>
        </div>
    );
}