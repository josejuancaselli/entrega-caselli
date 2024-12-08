import { FaCopyright } from "react-icons/fa";

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="copyright">
            <FaCopyright /> {currentYear} Coderhouse. Todos los derechos reservados.
        </div>
    );
};

export default Copyright;
