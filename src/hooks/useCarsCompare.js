// Hooks
import { useState } from "react";


function useCarsCompare() {

    // Stato che contiene le auto selezionate per il confronto
    const [carsToCompare, setCarsToCompare] = useState([]);


    // Aggiungi un'auto al comparatore
    function addToCompare(carToAdd) {

        const carAlreadyAdded = carsToCompare.find(selectedCar => selectedCar.id === carToAdd.id);

        const canBeAdded = carsToCompare.length < 2 && !carAlreadyAdded;

        if (canBeAdded) {
            setCarsToCompare(previousCars => [...previousCars, carToAdd]);
        }

    }


    // Rimuovi un'auto dal comparatore
    function removeFromCompare(carIdToRemove) {

        setCarsToCompare(previousCars =>
            previousCars.filter(selectedCar => selectedCar.id !== carIdToRemove)
        );

    }


    return {
        addToCompare,
        removeFromCompare,
        carsToCompare
    };

}


export default useCarsCompare;