import { Link, NavLink } from "react-router-dom"
import './header.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">

            <button className="navbar-toggler"
                type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-canvas offcanvas offcanvas-top" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">

                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <ul className=" offcanvas-body navbar-list">

                    <li data-bs-dismiss="offcanvas"><Link className="nav-link active" aria-current="page" to="/" >Inicio</Link></li>
                    <li data-bs-dismiss="offcanvas"><Link className="nav-link" to="/contacto" >Contacto</Link></li>
                    <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="/productos/Remeras" >Remeras</Link></li>
                    <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="/productos/Buzos" >Buzos</Link></li>
                    <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="/productos/Zapatillas" >Zapatillas</Link></li>

                </ul>
            </div>

        </nav>


        // <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //     <div className="container-fluid">

        //     <button className="navbar-toggler"
        //         type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarNavDropdown"> {/*menu hamburguesa*/}
        //         <ul className="navbar-nav">
        //             <li className="nav-item">
        //                 <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link" to="/contacto">Contacto</Link>
        //             </li>
        //             <li className="nav-item dropdown">
        //                 <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Ropa </NavLink>
        //                 <ul className="dropdown-menu">
        //                     <li><Link className="dropdown-item" to="/productos/Remeras">Remeras</Link></li>
        //                     <li><Link className="dropdown-item" to="/productos/Buzos">Buzos</Link></li>
        //                     <li><Link className="dropdown-item" to="/productos/Zapatillas">Zapatillas</Link></li>
        //                 </ul>
        //             </li>
        //         </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar

