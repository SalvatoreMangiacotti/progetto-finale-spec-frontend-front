// Hooks
import { useState, useEffect } from "react";

// URL API
const apiUrl = import.meta.env.VITE_API_URL;



function useCompareDetails(carsToCompare) {

    // Stato: dettagli completi delle auto da confrontare
    const [detailedCars, setDetailedCars] = useState([]);

    // Stato: errore 
    const [error, setError] = useState(null);


    // Utility per fetchare i dati di una singola auto
    async function fetchData(url) {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Impossibile recuperare i dettagli dell'auto");
        }

        const data = await response.json();
        return data;

    }


    useEffect(() => {

        async function fetchCarDetails() {

            try {

                // Creo una promise per ogni auto da recuperare
                const promises = carsToCompare.map(car =>
                    fetchData(`${apiUrl}/cars/${car.id}`)
                );

                // Aspetto il completamento di tutte le fetch
                const responses = await Promise.all(promises);

                // Estraggo solo il campo "car" da ogni risposta
                const fullCars = responses.map(res => res.car);

                // Aggiorno lo stato con i dati completi
                setDetailedCars(fullCars);

            } catch (error) {

                console.error(error);
                setError(error);

            }

        }

        fetchCarDetails();

    }, [carsToCompare]);


    return {
        detailedCars,
        error,
    };

}

export default useCompareDetails;