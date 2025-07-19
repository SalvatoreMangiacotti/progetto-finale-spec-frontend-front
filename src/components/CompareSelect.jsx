// Hooks
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";


function CompareSelect() {

    const { carsToCompare, removeCar } = useGlobalContext()
    const navigate = useNavigate();


    return (
        <>

            <h2>Confronta auto</h2>

            <ul>
                {carsToCompare.map(car => (
                    <li key={car.id}>
                        {car.title}
                        <span className="button" onClick={() => removeCar(car.id)}>
                            <img src="./icons/remove-icon.svg" />
                        </span>
                    </li>
                ))}

                <button className="button" onClick={() => navigate("/compare")}>
                    Compara
                </button>
            </ul>

        </>
    )

}

export default CompareSelect;