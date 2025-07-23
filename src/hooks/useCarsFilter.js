// Hooks
import { useState, useEffect, useMemo, useCallback } from "react";


// Funzione di debounce
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

    // State per la searchbar & debounce
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    // State per il filtro categoria
    const [categoryFilter, setCategoryFilter] = useState("");

    // State per l'ordinamento alfabetico
    const [sortOrder, setSortOrder] = useState("");


    // funzione debounced
    const delayedSearch = useCallback(
        debounce((value) => {
            setDebouncedSearch(value);
        }, 300),
        []
    );


    // useEffect: attiva delayedSearch al cambio di 'search'
    useEffect(() => {
        delayedSearch(search);
    }, [search, delayedSearch]);


    const filteredCars = useMemo(() => {

        let filtered = carsList;


        // Filtro in base alla ricerca nel titolo
        if (debouncedSearch) {

            filtered = filtered.filter(car =>
                car.title.toLowerCase().includes(debouncedSearch.toLowerCase())
            );

        }


        // Filtro per categoria
        if (categoryFilter) {

            filtered = filtered.filter(car =>
                car.category === categoryFilter
            );

        }


        // Ordinamento alfabetico
        if (sortOrder) {

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



    // Restituisce una lista di categorie uniche
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
        setSortOrder,
    };

}

export default useCarsFilter;