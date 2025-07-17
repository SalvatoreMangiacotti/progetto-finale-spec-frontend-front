// Hooks
import { useState } from "react";


function useCarsCompare() {

    // Stato che contiene le auto selezionate per il confronto
    const [carsToCompare, setCarsToCompare] = useState([]);



    // Funzione per aggiungere un'auto al comparatore
    const addCar = (car) => {

        // Controlla se l'auto è già stata aggiunta
        const carAlreadyAdded = carsToCompare.find(listCar => listCar.id === car.id);

        const twoCarsAlreadyAdded = carsToCompare.length >= 2;

        if (!carAlreadyAdded && !twoCarsAlreadyAdded) {
            setCarsToCompare(prevCar => [...prevCar, car])
        }

    }



    // Funzione per rimuovere un'auto dal comparatore
    const removeCar = (id) => {
        // Rimuove l'auto con id corrispondente dalla lista
        setCarsToCompare(prevCars => prevCars.filter(currCar => currCar.id !== id));
    }



    return {
        addCar,
        removeCar,
        carsToCompare
    }

}

export default useCarsCompare;