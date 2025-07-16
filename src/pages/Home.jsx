// Hooks
import useCars from "../hooks/useCars";

// Componenti
import CarsList from "../components/CarsList";


function Home() {

    const { cars } = useCars();

    return (
        <CarsList cars={cars} />
    )

}

export default Home;