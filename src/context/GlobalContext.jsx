// Hooks
import { createContext, useContext } from 'react';

import useCarsFetch from '../hooks/useCarsFetch';
import useCarsCompare from '../hooks/useCarsCompare';
import useFavorites from '../hooks/useFavorites';



// Creazione del contesto globale
const GlobalContext = createContext();



export const GlobalProvider = ({ children }) => {

    // gestione lista auto
    const carsData = useCarsFetch();

    // aggiunta e rimozione auto dal comparatore
    const carsCompareActions = useCarsCompare();

    // aggiunta e rimozione auto dai preferiti
    const favoritesLogic = useFavorites();


    return (
        <GlobalContext.Provider
            value={{
                ...carsData,
                ...carsCompareActions,
                ...favoritesLogic
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

// Semplifica l'accesso ai dati del GlobalContext
export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;