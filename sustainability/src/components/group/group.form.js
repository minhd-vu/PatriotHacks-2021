import React, { useState } from "react";
import GroupCreate from "./group.create";
import GroupJoin from "./group.join";

export default function GroupForm() {
    const [error, setError] = useState("");

    return (
        <div className="text-center">
            {
                error && <div className="alert alert-danger" role="alert">{error}</div>
            }
            <GroupJoin setError={setError} />
            <GroupCreate/>
        </div>
    );
}