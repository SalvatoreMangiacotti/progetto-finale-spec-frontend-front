// Hooks
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useMemo, useEffect } from "react";


function useCarsFilter() {

    const { cars } = useGlobalContext();

    // Stato locale per la ricerca live
    const [search, setSearch] = useState('');

    // Stato locale per la ricerca debounced dopo un delay di 300ms
    const [debouncedSearch, setDebouncedSearch] = useState(search);


    // Aggiorna debouncedSearch solo 300ms dopo che l'utente inizia a scrivere 
    useEffect(() => {

        const handler = setTimeout(() =>

            setDebouncedSearch(search), 300);

        return () => clearTimeout(handler);

    }, [search]);

    // Ricalcola solo quando cambiano debouncedSearch o cars
    const filteredCars = useMemo(() => {

        return cars.filter(car =>
            car.title.toLowerCase().includes(debouncedSearch.toLowerCase()
            ))

    }, [debouncedSearch, cars]);


    return {
        filteredCars,
        search,
        setSearch
    }

}

export default useCarsFilter;