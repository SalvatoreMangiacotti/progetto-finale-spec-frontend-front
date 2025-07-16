// Hooks
import { createContext, useContext } from "react";

// Componenti
import useCars from "../hooks/useCars";

// Creazione del contesto globale
const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {

    const carsData = useCars()

    return (
        <GlobalContext.Provider value={{ ...carsData }}>
            {children}
        </GlobalContext.Provider>
    )
}

// Hook per usare il contesto globalmente
export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;