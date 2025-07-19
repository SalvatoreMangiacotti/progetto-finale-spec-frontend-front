// Hooks
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";


function CarsList({ cars }) {

    const { addCar, addFavorite } = useGlobalContext()

    return (
        <>
            {cars.map(car =>
                <div className="car-card" key={car.id}>

                    <h2>{car.title}</h2>
                    <p>{car.category}</p>

                    <Link to={`/cars/${car.id}`} className="card-link">Dettagli</Link>

                    <span onClick={() => addCar(car)} className="button">
                        <img src="./icons/add-icon.svg" />
                    </span>

                    <span onClick={() => addFavorite(car)} className="button">
                        <img src="./icons/favorite-icon.svg" />
                    </span>

                </div>
            )
            }
        </>
    )

}

export default CarsList;