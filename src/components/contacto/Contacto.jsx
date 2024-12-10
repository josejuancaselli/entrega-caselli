import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../../firebase/configFirebase";
import { useState } from "react";
import { Link } from "react-router-dom";


const Contacto = () => {

    const { register, handleSubmit} = useForm();
    const [mensaje, setMensaje] = useState("");
    const enviar = () =>{
        setMensaje("Hemos recibido su consulta")
    }

    return (



        <div>
            <h1>Contacto</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.570600522683!2d-57.95505172338032!3d-34.917223974124134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7672ff61db3%3A0xf9ace19906f451e7!2sEco%20Music%20Sa!5e0!3m2!1ses-419!2sar!4v1712733365705!5m2!1ses-419!2sar" referrerpolicy="no-referrer-when-downgrade">
            </iframe>

            <form onSubmit={handleSubmit(enviar)} className="checkout-form">

                <label className="form-label">Nombre:</label>
                <input className="form-input" type="text" placeholder="Tus nombres"{...register("nombre", { required: true })} />

                <label className="form-label">Correo:</label>
                <input className="form-input" type="email" placeholder="tucorreo@correo.com" {...register("email", { required: true })} />

                <label className="form-label">Dejanos tu consulta:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className="checkout-buttons">
                    <button type="submit" className="btn-pay">Enviar</button>
                </div>
                {mensaje && <p className="success-message">{mensaje}, puede seguir comprando <Link to="/">aquí</Link></p>}
            </form>
        </div>
    );
}

export default Contacto;
