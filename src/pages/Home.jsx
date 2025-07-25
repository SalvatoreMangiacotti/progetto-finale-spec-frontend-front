// Hooks
import useCarsFilter from '../hooks/useCarsFilter';
import { useGlobalContext } from '../context/GlobalContext';


// Componenti
import CarsList from '../components/CarsList';
import CompareSidebar from '../components/CompareSidebar';
import SearchFilter from '../components/SearchFilter';
import CategoryFilter from '../components/CategoryFilter';
import SortFilter from '../components/SortFilter';


// CSS
import '../styles/Home.css';



function Home() {

    // Lista di auto dal globalContext
    const { carsList, error } = useGlobalContext();

    const {
        filteredCars,
        search,
        setSearch,
        categoryFilter,
        setCategoryFilter,
        categories,
        sortOrder,
        setSortOrder,
    } = useCarsFilter(carsList);


    return (
        <div className='main-container'>

            <div className='sidebar'>

                <SearchFilter
                    search={search}
                    setSearch={setSearch}
                />

                <CategoryFilter
                    categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
                    categories={categories}
                />

                <SortFilter
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                />

                {/* Auto selezionate per il confronto */}
                <CompareSidebar />
            </div>


            <div className='cars-list'>
                <CarsList
                    filteredCars={filteredCars}
                    error={error}
                />
            </div>

        </div>
    );
}

export default Home;