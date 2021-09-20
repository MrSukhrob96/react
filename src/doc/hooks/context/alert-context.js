import React, { useContext, useState } from "react"

const AlertContext = React.createContext();
const ToggleContect = React.createContext();

export function useAlert() {
    return useContext(AlertContext);
}

export function useToggle() {
    return useContext(ToggleContect)
}


function AlertProvider({ children }) {

    const [alert, setAlert] = useState(false);

    const toggle = () => setAlert(prev => !prev)

    return (
        <AlertProvider.Provider value={alert}>
            <ToggleContect.Provider value={toggle}>
                {children}
            </ToggleContect.Provider>
        </AlertProvider.Provider>
    )
}

export default AlertProvider;