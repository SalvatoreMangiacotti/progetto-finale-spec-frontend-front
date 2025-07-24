// Hooks
import { useState } from 'react';



function useCarsCompare() {

    // Stato che contiene le auto selezionate per il confronto
    const [carsToCompare, setCarsToCompare] = useState([]);


    // Aggiungi un'auto al comparatore
    function addToCompare(carToAdd) {

        // Verifico se l'auto è già presente nel comparatore
        const carAlreadyAdded = carsToCompare.find(
            selectedCar => selectedCar.id === carToAdd.id
        );

        const canBeAdded = carsToCompare.length < 2 && !carAlreadyAdded;

        if (canBeAdded) {
            setCarsToCompare(previousCar => [...previousCar, carToAdd]);
        }
    }


    // Rimuovi un'auto dal comparatore
    function removeFromCompare(carIdToRemove) {

        // Uso .filter() per creare un nuovo array che esclude l'auto da rimuovere.
        setCarsToCompare(previousCars =>

            // Per ogni auto selezionata(selectedCar),
            // controlla se il suo ID è diverso da quello che voglio rimuovere(carIdToRemove)
            previousCars.filter(
                selectedCar => selectedCar.id !== carIdToRemove
            )
        );

    }


    return {
        addToCompare,
        removeFromCompare,
        carsToCompare
    };

}

export default useCarsCompare;