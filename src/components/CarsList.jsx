// Hooks
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";


function CarsList({ cars }) {

    const { addCar } = useGlobalContext()

    return (
        <div className="cars-container">
            {cars.map(car =>
                <div className="car-card" key={car.id}>
                    <h2>{car.title}</h2>
                    <p>{car.category}</p>
                    <Link to={`/cars/${car.id}`}><span className="button">Dettagli</span></Link>
                    <span className="button" onClick={() => addCar(car)}> +</span>
                </div>
            )
            }
        </div >
    )

}

export default CarsList;