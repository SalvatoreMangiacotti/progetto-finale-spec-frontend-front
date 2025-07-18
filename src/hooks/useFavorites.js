// Hooks
import { useState } from "react";


function useFavorites() {

    const [favorites, setFavorites] = useState([]);



    const addFavorite = (car) => {

        const alreadyFavorite = favorites.some(fav => fav.id === car.id)

        if (!alreadyFavorite) {
            setFavorites(prevFav => [...prevFav, car])
        }
    }



    const removeFavorite = (carId) => {
        setFavorites(prev => prev.filter(car => car.id !== carId));
    };



    return {
        favorites,
        addFavorite,
        removeFavorite
    };

}

export default useFavorites;