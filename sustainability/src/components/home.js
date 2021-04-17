import React, { useContext } from "react";
import Profile from "./profile";
import Login from "./auth/login";
import { UserContext } from "../contexts/user.context";

export default function Home() {
    const user = useContext(UserContext);
    return (
        user.isAuth ? <Profile /> : <Login />
    );
}