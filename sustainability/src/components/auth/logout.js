import { UserContext } from "../../contexts/user.context";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Logout() {

    const user = useContext(UserContext);

    function onLogout() {
        axios.get("/api/logout", { withCredentials: true })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    user.setAuth(false);
                    user.setUsername("");
                    user.setGroup("");
                }
            });
    }

    return (
        <Nav.Link as={Link} to="/login" onClick={onLogout}>Logout</Nav.Link>
    );
}