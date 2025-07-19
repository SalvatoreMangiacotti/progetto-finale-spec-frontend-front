// Hooks
import useCarsFilter from "../hooks/useCarsFilter";

// Componenti
import CarsList from "../components/CarsList";
import SearchBar from "../components/SearchBar";
import CategorySelect from "../components/CategorySelect";
import OrderSelect from "../components/OrderSelect";
import CompareSelect from "../components/CompareSelect";

// CSS
import '../styles/Home.css'


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
        <div className="main-container">

            <div className="main-side-bar hidden" >

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

                <CompareSelect />
            </div>

            <div className="main-cars-list">
                <CarsList cars={filteredCars} />
            </div>

        </div>
    )

}

export default Home;