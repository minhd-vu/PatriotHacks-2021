import React, { useContext } from "react";
import { UserContext } from "../contexts/user.context";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Logout from "./auth/logout";

export default function Header() {
    const user = useContext(UserContext);

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
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}