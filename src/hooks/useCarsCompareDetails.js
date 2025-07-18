// Hooks
import { useState, useEffect } from "react";

// url api
const apiUrl = import.meta.env.VITE_API_URL;



function useCarsCompareDetails(carsToCompare) {

    const [detailedCars, setDetailedCars] = useState([]);



    // Promise combinators
    async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        async function fetchCarDetails() {

            try {
                // Per ogni auto selezionata, genero un array di Promise
                const promises = carsToCompare.map(car =>
                    fetchData(`${apiUrl}/cars/${car.id}`)
                );

                // Eseguo tutte le fetch contemporaneamente, e aspetto siano completate
                const responses = await Promise.all(promises);

                // "Estraggo" le auto (.car)
                const detailedCars = responses.map(response => response.car);

                setDetailedCars(detailedCars);

            } catch (error) {
                console.error(error);
            }

        }

        fetchCarDetails();

    }, [carsToCompare]);



    return { detailedCars };

}

export default useCarsCompareDetails;