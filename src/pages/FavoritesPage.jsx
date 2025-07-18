// Hooks
import { useGlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

function FavoritesPage() {
    const { favorites, removeFavorite } = useGlobalContext();

    if (favorites.length === 0) {
        return <p>Nessun auto nei preferiti</p>;
    }

    return (
        <div className="favorites-page">
            <h2>Le tue auto preferite</h2>

            <div className="cars-container">
                {favorites.map(car => (
                    <div key={car.id} className="car-card">
                        <h3>{car.title}</h3>
                        <p>{car.category}</p>
                        <Link to={`/cars/${car.id}`} className="button">Dettagli</Link>
                        <button className="button" onClick={() => removeFavorite(car.id)}>Rimuovi</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FavoritesPage;
