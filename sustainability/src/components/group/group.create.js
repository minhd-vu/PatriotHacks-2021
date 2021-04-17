import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function GroupCreate() {
    const user = useContext(UserContext);
    const history = useHistory();

    function onCreateGroup(e) {
        e.preventDefault();

        axios.get("/api/create", { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    user.setGroup(res.data);
                }
            })
            .catch(err => {
                console.log(err);
                if (err.response.status === 401) {
                    history.push("/login");
                }
            });
    }

    return (
        <form onSubmit={onCreateGroup}>
            <div className="form-group">
                <input type="submit" value="Create Group" className="btn btn-success" />
            </div>
        </form>
    );
}