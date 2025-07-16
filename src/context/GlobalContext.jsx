// Hooks
import { createContext, useContext } from "react";

// Componenti
import useCarsData from "../hooks/useCarsData";

// Creazione del contesto globale
const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {

    const carsData = useCarsData()

    return (
        <GlobalContext.Provider value={{ ...carsData }}>
            {children}
        </GlobalContext.Provider>
    )
}

// Hook per usare il contesto globalmente
export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;