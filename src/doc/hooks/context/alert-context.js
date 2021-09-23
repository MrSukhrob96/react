import React, { useContext, useState } from "react"

const AlertContext = React.createContext();

export function useAlert() {
    return useContext(AlertContext);
}

export function AlertProvider({ children }) {

    const [alert, setAlert] = useState(false);

    const toggle = () => setAlert(prev => !prev)

    return (
        <AlertContext.Provider value={{
            vissable: alert,
            toggle
        }}>
            {children}
        </AlertContext.Provider>
    )
}