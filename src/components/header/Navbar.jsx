import { Link } from "react-router-dom"
import './header.css';

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar-list">
                <li className="navbar-item"><Link to="/"> Inicio </Link></li>
                <li className="navbar-item"><Link to="/productos/Remeras">Remeras</Link></li>
                <li className="navbar-item"><Link to="/productos/Buzos">Buzos</Link></li>
                <li className="navbar-item"><Link to="/productos/Zapatillas">Zapatillas</Link></li>
                <li className="navbar-item"><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar