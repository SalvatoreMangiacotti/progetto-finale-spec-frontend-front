// Hooks
import { useEffect, useState } from "react";

// API URL
const apiUrl = import.meta.env.VITE_API_URL;


function useCarDetails(id) {

    // Stato per l'auto selezionata
    const [car, setCar] = useState(null);

    // Stato per gestire eventuali errori
    const [error, setError] = useState(null);


    useEffect(() => {

        if (!id) return;

        const fetchCarId = async () => {
            try {
                const response = await fetch(`${apiUrl}/cars/${id}`);

                if (!response.ok) {
                    throw new Error("Dettagli dell'auto non disponibili");
                }

                const data = await response.json();

                setCar(data.car);

            } catch (error) {
                setError(error);
            }
        };

        fetchCarId();

    }, [id]);

    return {
        car,
        error,
    };
}

export default useCarDetails;