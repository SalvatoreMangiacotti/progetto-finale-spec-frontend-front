// Hooks
import { useGlobalContext } from "../context/GlobalContext";


function CompareSelect() {

    const { carsToCompare, removeCar } = useGlobalContext()

    return (
        <div className="compare-select-container">

            <h2>Confronta auto</h2>

            <ul>
                {carsToCompare.map(car => (
                    <li key={car.id}>
                        {car.title}
                        <span className="button" onClick={() => removeCar(car.id)}>-</span>
                    </li>
                ))}

                <button className="button">
                    Compara
                </button>
            </ul>

        </div>
    )

}

export default CompareSelect;