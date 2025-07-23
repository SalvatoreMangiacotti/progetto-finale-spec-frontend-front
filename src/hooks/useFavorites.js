// Hooks
import { useState } from "react";



function useFavorites() {

    // Stato: lista delle auto preferite
    const [favorites, setFavorites] = useState([]);


    // Aggiunge un'auto ai preferiti (se non già presente)
    const addFavorite = (car) => {
        const alreadyFavorite = favorites.some(fav => fav.id === car.id);

        if (!alreadyFavorite) {
            setFavorites(prevFav => [...prevFav, car]);
        }
    };


    // Rimuove un'auto dai preferiti
    const removeFavorite = (carId) => {
        setFavorites(prev => prev.filter(car => car.id !== carId));
    };


    return {
        favorites,
        addFavorite,
        removeFavorite,
    };

}

export default useFavorites;