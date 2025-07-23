// Hooks
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';


// CSS
import '../styles/FavoritesPage.css';



function FavoritesPage() {

    const { favorites, removeFavorite } = useGlobalContext();


    if (favorites.length === 0) {
        return <p>Nessun auto nei preferiti 🚙</p>;
    }


    return (
        <>
            <h2>Le tue auto preferite</h2>

            <>
                {favorites.map(car => (
                    <div
                        key={car.id}
                    >
                        <h3>{car.title}</h3>
                        <p>{car.category}</p>

                        <Link
                            to={`/cars/${car.id}`}
                        >
                            Dettagli
                        </Link>

                        <button
                            onClick={() => removeFavorite(car.id)}
                        >
                            Rimuovi
                        </button>
                    </div>
                ))}
            </>
        </>
    );
}

export default FavoritesPage;