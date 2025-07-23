// Hooks
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';



function CarsList({ filteredCars, error }) {

    const { addToCompare, addFavorite } = useGlobalContext();


    if (error) {
        return <p>{error.message}</p>;
    }


    return (
        <>
            {filteredCars.map(car => (
                <div
                    key={car.id}
                    className="list-car"
                >
                    <h3>{car.title}</h3>
                    <p>{car.category}</p>

                    <Link
                        to={`/cars/${car.id}`}
                        className="card-link"
                    >
                        Dettagli
                    </Link>

                    <button onClick={() => addToCompare(car)}>
                        <img src="./icons/add-icon.svg" alt="Aggiungi al confronto" />
                    </button>

                    <button onClick={() => addFavorite(car)}>
                        <img src="./icons/favorite-icon.svg" alt="Aggiungi ai preferiti" />
                    </button>
                </div>
            ))}
        </>
    );
}

export default CarsList;