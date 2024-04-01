import React, { useState } from 'react'
import { Context } from '../MyContext';

const UserContextProvider = ({ children }) => {
    const [signIn, setsignIn] = useState(false);
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [postitems, setpostitems] = useState("");

    return (

        <Context.Provider value={{
            name, setName, pwd,
            setPwd, signIn, setsignIn,
            postitems, setpostitems
        }}>
            {
                children
            }
        </Context.Provider>
    )
}

export default UserContextProvider