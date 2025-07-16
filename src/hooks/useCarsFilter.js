// Hooks
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useMemo, useEffect } from "react";

function useCarsFilter() {

    // Dati delle auto dal contesto globale
    const { cars } = useGlobalContext();

    // Stati per la ricerca, ricerca con debounce, categoria e ordinamento
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState(search);

    const [category, setCategory] = useState("");

    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");



    // Effetto per aggiornare la ricerca debounced con 300ms di ritardo
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);

        // Cancella il timeout se search cambia prima dei 300ms
        return () => clearTimeout(timer);
    }, [search]);



    // Memoizzazione del filtro e ordinamento auto
    const filteredCars = useMemo(() => {

        // Filtro auto per titolo e categoria
        let filtered = cars.filter(car => {

            const filterByTitle = car.title.toLowerCase().includes(debouncedSearch.toLowerCase());
            const filterByCategory = category ? car.category === category : true;

            return filterByTitle && filterByCategory;
        });

        // Ordinamento alfabetico
        if (sortBy) {
            filtered.sort((a, b) => {

                const valA = a[sortBy].toLowerCase();
                const valB = b[sortBy].toLowerCase();

                return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
            });
        }

        return filtered;

    }, [cars, debouncedSearch, category, sortBy, sortOrder]);



    // Memoizzazione delle categorie uniche tramite Set
    const categories = useMemo(() => {

        // Set restituisce solo valori unici ottenuti dal map, lo spread li trasforma in un array
        return [...new Set(cars.map(car => car.category))];

    }, [cars]);



    return {
        filteredCars,
        search,
        setSearch,
        category,
        setCategory,
        categories,
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder
    };

}

export default useCarsFilter;