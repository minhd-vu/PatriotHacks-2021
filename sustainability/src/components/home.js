import React, { useContext } from "react";
import Group from "./group/group"
import GroupForm from "./group/group.form"
import { UserContext } from "../contexts/user.context";

export default function Home() {
    const user = useContext(UserContext);

    return (
        user.group ? <Group /> : <GroupForm />
    );
}