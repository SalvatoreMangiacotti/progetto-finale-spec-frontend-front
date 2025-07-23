// Hooks
import { useParams } from "react-router-dom";
import useCarDetails from "../hooks/useCarDetails";


function CarDetails() {

    // ID dell'auto dalla URL
    const { id } = useParams();

    // dati dell'auto e l'eventuale errore tramite l'hook
    const { car, error } = useCarDetails(id);


    if (error) return <p>Errore: {error.message}</p>;

    // Mostra un messaggio di caricamento finché i dati non arrivano
    if (!car) return <p>Caricamento dettagli auto... 🚙</p>;


    return (
        <div className="car-details">

            <h2>{car.title}</h2>

            <p>Categoria: {car.category}</p>

            <p>Paese di produzione: {car.origin}</p>

            <p>Designer: {car.designer?.join(", ")}</p>

            <p>
                Gare:{car.races && car.races.length > 0
                    ? car.races.join(", ")
                    : " Nessuna gara registrata"}
            </p>

            <p>Descrizione: {car.description}</p>

        </div>
    );
}

export default CarDetails;