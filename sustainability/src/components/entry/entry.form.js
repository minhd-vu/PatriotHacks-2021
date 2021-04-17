import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom"
import axios from "axios";
// import { UserContext } from "../../contexts/user.context";x
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UserContext } from "../../contexts/user.context";

export default function EntryForm() {
    // const history = useHistory();
    const user = useContext(UserContext);
    const [desc, setDesc] = useState("");
    const [hours, setHours] = useState("");
    const [amount, setAmount] = useState("");

    function onSubmit(e) {
        e.preventDefault();

        axios.post("/api/entry/", {
            desc: desc,
            hours: hours,
            amount: amount,
        }, { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    user.setReload(!user.reload);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <Row>
                <Col md={6}>
                    <div className="form-group">
                        <input
                            placeholder="Description"
                            type="text"
                            required
                            className="form-control"
                            value={desc}
                            onChange={e => setDesc(e.target.value)}
                        />
                    </div>
                </Col>
                <Col md={2}>
                    <div className="form-group">
                        <input
                            placeholder="Hours"
                            type="number"
                            step="0.1"
                            min="0"
                            required
                            className="form-control"
                            value={hours}
                            onChange={e => setHours(e.target.value)}
                        />
                    </div>
                </Col>
                <Col md={2}>
                    <div className="form-group">
                        <input
                            placeholder="Amount"
                            type="number"
                            step="0.1"
                            min="0"
                            required
                            className="form-control"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                        />
                    </div>
                </Col>
                <Col md={2}>
                    <div className="form-group">
                        <input type="submit" value="Add Entry" className="btn btn-success" />
                    </div>
                </Col>
            </Row>
        </form>
    );
}