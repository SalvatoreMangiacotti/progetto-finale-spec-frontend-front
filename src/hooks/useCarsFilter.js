// Hooks
import { useState, useEffect, useMemo, useCallback } from "react";



// Definizione funzione di debounce
function debounce(callback, delay) {

    let timer;

    return (value) => {

        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(value);
        }, delay);

    };

}



function useCarsFilter(carsList) {

    // Stato per la searchbar & debounce
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");


    // Stato per il filtro categoria
    const [categoryFilter, setCategoryFilter] = useState("");


    // Stato per l'ordinamento
    const [sortOrder, setSortOrder] = useState("");



    // Crea una funzione con debounce
    const delayedSearch = useCallback(
        debounce((value) => {
            setDebouncedSearch(value);
        }, 300),
        []
    );


    // Ogni volta che search cambia, esegue la funzione
    useEffect(() => {
        delayedSearch(search);
    }, [search, delayedSearch]);



    // Lista filtrata e ordinata in base alle scelte dell'utente
    const filteredCars = useMemo(() => {

        let filtered = carsList;


        // Filtro testuale
        // SE l'utente digita:
        if (debouncedSearch) {
            filtered = filtered.filter(car =>
                car.title.toLowerCase().includes(debouncedSearch.toLowerCase())
            );
        }


        // Filtro per categoria
        // SE l'utente seleziona una categoria:
        if (categoryFilter) {
            filtered = filtered.filter(car =>
                car.category === categoryFilter
            );
        }


        // Ordinamento A-Z o Z-A
        // SE l'utente seleziona un ordinamento:
        if (sortOrder) {

            // sortOrder => title-asc / category-desc
            const [sortBy, order] = sortOrder.split("-");

            filtered.sort((a, b) => {

                const valA = a[sortBy].toLowerCase();
                const valB = b[sortBy].toLowerCase();

                return order === "asc"
                    ? valA.localeCompare(valB)
                    : valB.localeCompare(valA);

            });

        }

        return filtered;

    }, [carsList, debouncedSearch, categoryFilter, sortOrder]);


    // Categorie uniche
    const categories = useMemo(() => {

        const uniqueCategories = [];

        carsList.forEach(car => {
            if (!uniqueCategories.includes(car.category)) {
                uniqueCategories.push(car.category);
            }
        });

        return uniqueCategories;

    }, [carsList]);



    return {
        filteredCars,
        search,
        setSearch,
        categories,
        categoryFilter,
        setCategoryFilter,
        sortOrder,
        setSortOrder
    };

}

export default useCarsFilter;