import React, { useContext } from "react"
import { useAlert } from "./alert-context";

function Alert() {
    
    const alert = useAlert();

    if (!alert.vissable) return null;

    return (
        <>
            I am alert message
        </>
    )
}

export default Alert;