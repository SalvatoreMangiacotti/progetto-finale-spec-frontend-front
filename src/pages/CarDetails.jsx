import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

function CarDetails() {

    const { car, getCarById } = useGlobalContext();

    const { id } = useParams();


    // Esegue getCarById cosi da caricare i dati richiesti
    useEffect(() => {
        getCarById(id); // Viene passato l'id ricavato da useParams
    }, [id]);
    // Passo id come dipendenza nel caso volessi gestire la navigazione 
    // fra link ai dettagli in futuro (dalla pagina di dettaglio)

    if (!car) return <p>Auto non trovata!⛔</p>


    return (
        <div className="car-details">
            <h2>{car.title}</h2>
            <p><strong>Categoria:</strong> {car.category}</p>
            <p><strong>Anno:</strong> {car.year}</p>
        </div>)

}

export default CarDetails;

