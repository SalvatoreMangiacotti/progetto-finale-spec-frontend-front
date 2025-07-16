// Hooks
import { useEffect, useState } from "react";

// api url
const apiUrl = import.meta.env.VITE_API_URL;


function useCarsData() {

    const [cars, setCars] = useState([]);

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


    return { cars }

}

export default useCarsData;