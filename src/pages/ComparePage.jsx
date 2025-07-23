// Hooks
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import useCompareDetails from "../hooks/useCompareDetails";

// CSS
import '../styles/ComparePage.css'


function ComparePage() {

    const { carsToCompare } = useGlobalContext();

    const { detailedCars, error } = useCompareDetails(carsToCompare);


    if (error) {
        return <p>Errore durante il caricamento: {error.message} ⛔</p>;
    }


    if (detailedCars.length < 2) {
        return <p>Aggiungi almeno due auto al comparatore 🚙 </p>;
    }


    const [carOne, carTwo] = detailedCars;


    return (
        <div className="compare-container">

            <h2>Confronto auto</h2>

            <div className="compare-content">

                {[carOne, carTwo].map((car) => (

                    <div key={car.id} className="compare-card">

                        <div className="card-title">

                            <h2>{car.title}</h2>
                            <h3>Identità dell'auto</h3>
                            <p>Categoria: {car.category}</p>
                            <p>Anno: {car.year}</p>
                            <p>Unità prodotte: {car.unitsProduced}</p>
                            <p>Materiali Carrozzeria: {car.materials}</p>

                        </div>


                        <div className="card-spec">

                            <h3>Specifiche tecniche</h3>
                            <p>Motore: {car.engine}</p>
                            <p>Cavalli: {car.horsepower} cv</p>
                            <p>Velocità massima: {car.topSpeed} km/h</p>
                            <p>Accellerazione 1-100: {car.acceleration0to100} secondi</p>
                            <p>Trasmissione: {car.transmission}</p>

                        </div>

                        <Link to={`/cars/${car.id}`} className="button">
                            Dettagli
                        </Link>

                    </div>

                ))}

            </div>

            <Link to={`/`} className="button">
                Torna alla Home
            </Link>

        </div>
    );
}

export default ComparePage;