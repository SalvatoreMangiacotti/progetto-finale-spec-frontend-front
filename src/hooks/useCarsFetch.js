// Hooks
import { useEffect, useState } from "react";


// API URL
const apiUrl = import.meta.env.VITE_API_URL;



function useCarsFetch() {

    // Stato per la lista delle auto
    const [carsList, setCarsList] = useState([]);

    // Stato per gestire errori
    const [error, setError] = useState(null);


    // Recupero lista di auto
    useEffect(() => {

        async function fetchCars() {
            try {

                const response = await fetch(`${apiUrl}/cars`);

                // In caso di errore
                if (!response.ok) {
                    throw new Error("Errore nel recupero lista auto");
                }

                const data = await response.json();

                // Se la risposta è corretta
                setCarsList(data);

            } catch (error) {
                setError(error);
            }
        }

        fetchCars();

    }, []);


    return {
        carsList,
        error,
    };

}

export default useCarsFetch;