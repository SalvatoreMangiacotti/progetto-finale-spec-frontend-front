import { Link } from "react-router-dom";

function Header() {

    return (
        <header>
            <nav>
                <Link to="/" className="nav-link">Home</Link>
            </nav>
        </header>
    )

}

export default Header;