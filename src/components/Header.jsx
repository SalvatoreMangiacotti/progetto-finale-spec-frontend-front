import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

function Header() {

    const { favorites } = useGlobalContext()

    return (
        <header>
            <nav>
                <Link to="/" className="nav-link">Home</Link>

                <div>
                    <Link to="/favorites" className="nav-link">
                        Preferiti
                    </Link>
                    <span>{favorites.length}</span>
                </div>
            </nav>
        </header>
    )

}

export default Header;