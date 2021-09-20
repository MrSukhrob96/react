import React, { useContext } from "react"
import { useAlert } from "./alert-context";

function Alert() {

    const alert = useAlert();

    if (!alert) return null;

    return (
        <>
            I am alert message
        </>
    )
}

export default Alert;