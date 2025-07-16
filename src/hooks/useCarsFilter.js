// Hooks
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useMemo, useEffect } from "react";


function useCarsFilter() {

    // Dati delle auto dal contesto globale
    const { cars } = useGlobalContext();

    // Stati per: ricerca, ricerca debounced e categoria
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState(search);
    const [category, setCategory] = useState("");



    // Debounced Search: delay 300ms
    useEffect(() => {

        const timer = setTimeout(() => setDebouncedSearch(search), 300);
        return () => clearTimeout(timer);

    }, [search]);



    // Filtro per titolo & categoria
    const filteredCars = useMemo(() => {

        return cars.filter(car => {
            const carsByTitle = car.title.toLowerCase().includes(debouncedSearch.toLowerCase());
            const carsByCategory = category ? car.category === category : cars;
            return carsByTitle && carsByCategory;
        })

    }, [debouncedSearch, category, cars]);



    // Gestione delle categorie, crea un array di categorie uniche (Set)
    const categories = useMemo(() => {
        // Set restituisce solo valori unici ottenuti dal map,
        // lo spread lo trasforma in un array
        return [...new Set(cars.map(car => car.category))];
    }, [cars]);



    return {

        filteredCars,
        search,
        setSearch,
        category,
        setCategory,
        categories
    }

}

export default useCarsFilter;