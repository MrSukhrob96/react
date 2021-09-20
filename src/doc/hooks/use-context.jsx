import React from "react"
import AlertProvider from "./context/alert-context";
import Alert from "./context/alert";
import Main from "./context/main";

function UseContext() {
    return (
        <AlertProvider>
            <Alert />
            <Main />
        </AlertProvider>
    );
}

export default UseContext;