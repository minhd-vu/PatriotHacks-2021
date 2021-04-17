import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";

import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Help from "./components/help";
import Profile from "./components/profile";
import Groups from "./components/groups";
import Leaderboard from "./components/leaderboard";
import { UserContext } from "./contexts/user.context";

export default class App extends Component {
	static contextType = UserContext;

	componentDidMount() {
		axios.get("/api/login", { withCredentials: true })
			.then(res => {
				console.log(res.data);
				if (res.status === 200) {
					this.context.setAuth(true);
					this.context.setUsername(res.data.username);
					this.context.setGroup(res.data.group);
				}
			}).catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<Router>
				<Header />
				<br />
				<Container>
					<Route path="/" exact component={Profile} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/user/:username" render={props => <Profile {...props} />} />
					<Route path="/groups" component={Groups} />
					<Route path="/help" component={Help} />
					<Route path="/global" component={Leaderboard} />
				</Container>
				<br />
				<br />
				<br />
				<Footer />
			</Router >
		);
	}
}
