import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../../firebase/configFirebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./contacto.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacto = () => {
    AOS.init({
        duration: 3000,
        once: true,
    });
    const { register, handleSubmit } = useForm();
    const [mensaje, setMensaje] = useState("");
    const enviar = () => {
        setMensaje("Hemos recibido su consulta");
    };
    console.log(mensaje)
    return (
        <main>
            <h1>Contacto</h1>
            <div className="contacto-container">

                <section className="contacto-section">
                    <p>
                        Aquí puedes dejarnos tus consultas sobre nuestros productos, hacer solicitudes de reembolso o dejarnos un comentario sobre tu experiencia.
                    </p>
                    <div className="contacto-map-list" data-aos="flip-right">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.570600522683!2d-57.95505172338032!3d-34.917223974124134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7672ff61db3%3A0xf9ace19906f451e7!2sEco%20Music%20Sa!5e0!3m2!1ses-419!2sar!4v1712733365705!5m2!1ses-419!2sar"
                            className="contacto-map"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <ul className="contacto-list">
                            <li>Horario de atención: Lunes a Viernes de 9:00 a 18:00 hs</li>
                            <li>Teléfono: 11-1234-5678</li>
                            <li>Dirección: Av. San Juan 123, CABA</li>
                        </ul>
                    </div>

                </section>
                <form onSubmit={handleSubmit(enviar)} className="contacto-form">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        placeholder="Tus nombres"
                        {...register("nombre", { required: true })}
                    />

                    <label>Correo:</label>
                    <input
                        type="email"
                        placeholder="tucorreo@correo.com"
                        {...register("email", { required: true })}
                    />

                    <label>Dejanos tu consulta:</label>
                    <textarea cols="30" rows="10" placeholder="Escribe tu consulta aquí"></textarea>

                    <button type="submit">Enviar</button>
                    
                </form>
                {mensaje && (
                        
                            <p className="success-message">  {mensaje}, podés seguir comprando <Link to="/">acá</Link>.</p>
                            

                    )}
            </div>
        </main>
    );
};

export default Contacto;

