function CarsList({ cars }) {

    return (
        <div className="cars-container">
            {cars.map(car =>
                <div className="car-card" key={car.id}>
                    <h2>{car.title}</h2>
                    <p>{car.category}</p>
                </div>
            )}
        </div>
    )

}

export default CarsList;