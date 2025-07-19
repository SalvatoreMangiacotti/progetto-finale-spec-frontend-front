// Hooks
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

// CSS
import '../styles/Header.css'


function Header() {

    const { favorites } = useGlobalContext()

    return (

        <header>
            <nav>
                <Link to="/">Home</Link>

                <div className="nav-favorites">

                    <Link to="/favorites">
                        Preferiti
                    </Link>

                    <span>{favorites.length}</span>

                </div>
            </nav>
        </header>

    )

}

export default Header;