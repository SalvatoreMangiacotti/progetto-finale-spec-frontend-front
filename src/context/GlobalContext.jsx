// Hooks
import { createContext, useContext } from "react";
import useCarsData from "../hooks/useCarsData";
import useCarsCompare from "../hooks/useCarsCompare";


// Creazione del contesto globale
const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {

    const carsData = useCarsData()
    const compareCarsLogic = useCarsCompare();

    return (
        <GlobalContext.Provider value={{ ...carsData, ...compareCarsLogic }}>
            {children}
        </GlobalContext.Provider>
    )
}

// Hook per usare il contesto globalmente
export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;