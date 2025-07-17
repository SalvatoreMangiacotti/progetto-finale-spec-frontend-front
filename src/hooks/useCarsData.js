// Hooks
import { useEffect, useState } from "react";

// api url
const apiUrl = import.meta.env.VITE_API_URL;


function useCarsData() {

    const [cars, setCars] = useState([]);
    const [car, setCar] = useState(null);

    // Dati delle auto
    useEffect(() => {

        async function fetchCars() {
            try {

                const response = await fetch(`${apiUrl}/cars`);
                const data = await response.json();
                setCars(data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchCars();
    }, []);

    // Funzione "su richiesta" per recuperare l'id dell'auto
    async function getCarById(id) {
        try {

            const response = await fetch(`${apiUrl}/cars/${id}`);
            const data = await response.json();
            setCar(data.car);

        } catch (error) {
            console.log(error)
        }
    }

    return { cars, car, getCarById };

}

export default useCarsData;