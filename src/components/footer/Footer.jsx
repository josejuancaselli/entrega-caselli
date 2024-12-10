import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Copyright from './CopyRight';
import './footer.css'; // Asegúrate de importar el archivo CSS

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/"><h1>Sobre la silla</h1></Link>
            <ul>
                <li><a href="https://web.whatsapp.com/" target='_blank' rel="noopener noreferrer"><FaWhatsapp /></a></li>
                <li><a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"><FaFacebook /></a></li>
                <li><a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer"><FaInstagram /></a></li>
            </ul>
            <Copyright />
        </div>
    );
};

export default Footer;
