import React, { useContext, useState } from "react"

const AlertContext = React.createContext();

export function useAlert() {
    return useContext(AlertContext);
}

function AlertProvider({ children }) {

    const [alert, setAlert] = useState(false);

    const toggle = () => setAlert(prev => !prev)

    return (
        <AlertProvider.Provider value={{
            vissable: alert,
            toggle
        }}>
            {children}
        </AlertProvider.Provider>
    )
}

export default AlertProvider;