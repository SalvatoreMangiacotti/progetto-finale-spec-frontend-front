// Hooks
import useCarsFilter from "../hooks/useCarsFilter";

// Componenti
import CarsList from "../components/CarsList";
import SearchBar from "../components/SearchBar";
import CategorySelect from "../components/CategorySelect";
import OrderSelect from "../components/OrderSelect";


function Home() {

    const {

        filteredCars,
        search,
        setSearch,
        category,
        setCategory,
        categories,
        setSortBy,
        setSortOrder

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

            <OrderSelect
                setSortBy={setSortBy}
                setSortOrder={setSortOrder}
            />

            <CarsList cars={filteredCars} />
        </>
    )

}

export default Home;