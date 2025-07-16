// Hooks
import { useGlobalContext } from "../context/GlobalContext";

// Componenti
import CarsList from "../components/CarsList";


function Home() {

    const { cars } = useGlobalContext();

    return (
        <CarsList cars={cars} />
    )

}

export default Home;