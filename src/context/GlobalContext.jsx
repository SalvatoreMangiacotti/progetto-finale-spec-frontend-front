// Hooks
import { createContext, useContext } from "react";
import useCarsData from "../hooks/useCarsData";
import useCarsCompare from "../hooks/useCarsCompare";
import useFavorites from "../hooks/useFavorites";


// Creazione del contesto globale
const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {

    const carsData = useCarsData()
    const compareCarsLogic = useCarsCompare();
    const favoritesLogic = useFavorites();

    return (
        <GlobalContext.Provider value={{ ...carsData, ...compareCarsLogic, ...favoritesLogic }}>
            {children}
        </GlobalContext.Provider>
    )
}

// Hook per usare il contesto globalmente
export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;