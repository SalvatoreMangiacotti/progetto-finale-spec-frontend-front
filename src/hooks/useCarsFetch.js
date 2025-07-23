// Hooks
import { useEffect, useState } from "react";

// api url
const apiUrl = import.meta.env.VITE_API_URL;

function useCarsFetch() {

    // Stato per la lista delle auto
    const [carsList, setCarsList] = useState([]);

    // Stato per i dettagli di una singola auto
    const [car, setCar] = useState(null);

    // State per gestire errori
    const [error, setError] = useState(null);


    // recupero lista di auto
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


    // Recupero id auto
    async function getCarById(id) {
        try {
            const response = await fetch(`${apiUrl}/cars/${id}`);
            const data = await response.json();
            setCar(data.car);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        carsList,
        error,
        getCarById,
        car
    };
}

export default useCarsFetch;