import React from "react"
import { useAlert } from "./alert-context";

function Main() {

    const { toggle } = useAlert();

    return (
        <>
            <button onClick={toggle}>Show</button>
        </>
    )
}

export default Main;