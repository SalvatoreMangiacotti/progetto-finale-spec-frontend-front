// Hooks
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';



function CompareSidebar() {

    const { carsToCompare, removeFromCompare } = useGlobalContext();


    return (
        <aside className="compare-sidebar">
            <h3>
                Comparatore
            </h3>

            <ul>
                {carsToCompare.map(car => (
                    <li key={car.id}>
                        {car.title}

                        <button onClick={() => removeFromCompare(car.id)}>
                            <img src="./icons/remove-icon.svg" />
                        </button>
                    </li>
                ))}
            </ul>

            <Link to="/compare">
                <button>
                    Confronta ora
                </button>
            </Link>
        </aside>
    );
}

export default CompareSidebar;