import { useContext } from "react";
import Group from "./group/group";
import GroupForm from "./group/group.form";
import { UserContext } from "../contexts/user.context";

export default function Groups() {
    const user = useContext(UserContext);

    return (
        user.group ? <Group /> : <GroupForm />
    );
}