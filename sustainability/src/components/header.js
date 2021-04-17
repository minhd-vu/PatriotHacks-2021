import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Logout from "./auth/logout";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export default function Header() {
    const user = useContext(UserContext);
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        history.push("/user/" + e.target[0].value);
    }

    return (
        <Navbar collapseOnSelect expand="sm" bg="success" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">Hack Sustainability</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {
                            user.isAuth ?
                                <React.Fragment>
                                    <Logout />
                                    <Nav.Link as={Link} to={"/groups"}>Groups</Nav.Link>
                                </React.Fragment> :
                                <React.Fragment>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                </React.Fragment>
                        }
                        <Nav.Link as={Link} to="/help">Help</Nav.Link>
                        <Nav.Link as={Link} to="/global">Global</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Form inline onSubmit={onSubmit}>
                            <FormControl type="text" placeholder="Search User" className="mr-sm-2" />
                            <input type="submit" value="Search" className="btn btn-light" />
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}