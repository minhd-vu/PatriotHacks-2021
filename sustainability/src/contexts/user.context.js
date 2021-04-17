import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    const [group, setGroup] = useState("");
    const [isAuth, setAuth] = useState(false);

    return (
        <UserContext.Provider
            value={{
                username,
                setUsername,
                group,
                setGroup,
                isAuth,
                setAuth,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};