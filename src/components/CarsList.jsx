import { Link } from "react-router-dom";

function CarsList({ cars }) {

    return (
        <div className="cars-container">
            {cars.map(car =>
                <div className="car-card" key={car.id}>
                    <h2>{car.title}</h2>
                    <p>{car.category}</p>
                    <Link to={`/cars/${car.id}`}><span className="button">Dettagli</span></Link>
                </div>
            )}
        </div>
    )

}

export default CarsList;