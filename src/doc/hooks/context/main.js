import React from "react"
import { useToggle } from "./alert-context";

function Main() {

    const toggle = useToggle();

    return (
        <>
            <button onClick={toggle}>Show</button>
        </>
    )
}

export default Main;