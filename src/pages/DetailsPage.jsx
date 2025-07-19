// Hooks
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import '../styles/DetailsPage.css'


function DetailsPage() {

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
        <>

            <div className="details-container">

                <div className="details-card">
                    <h2>{car.title}</h2>
                    <p>Categoria: {car.category}</p>
                    <p>Paese di produzione: {car.origin}</p>
                    <p>Designer: {car.designer.join(', ')}</p>
                    {car.races && (
                        <p>Gare: {car.races.join(', ')}</p>
                    )}
                    <p>Descizione: {car.description}</p>

                </div>

            </div>


            <Link to={`/`} className="button" style={{ width: "30%" }}>
                Torna alla home
            </Link>

        </>
    )

}

export default DetailsPage;

