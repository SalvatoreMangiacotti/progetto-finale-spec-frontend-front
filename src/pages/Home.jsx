// Hooks
import useCarsFilter from "../hooks/useCarsFilter";

// Componenti
import CarsList from "../components/CarsList";
import SearchBar from "../components/SearchBar";


function Home() {

    const { filteredCars, search, setSearch } = useCarsFilter();

    return (
        <>
            <SearchBar search={search} setSearch={setSearch} />
            <CarsList cars={filteredCars} />
        </>
    )

}

export default Home;