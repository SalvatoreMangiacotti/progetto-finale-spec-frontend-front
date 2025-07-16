// Hooks
import useCarsFilter from "../hooks/useCarsFilter";

// Componenti
import CarsList from "../components/CarsList";
import SearchBar from "../components/SearchBar";
import CategorySelect from "../components/CategorySelect";


function Home() {

    const {

        filteredCars,
        search,
        setSearch,
        category,
        setCategory,
        categories

    } = useCarsFilter();

    return (
        <>
            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <CategorySelect
                category={category}
                setCategory={setCategory}
                categories={categories}
            />

            <CarsList cars={filteredCars} />
        </>
    )

}

export default Home;