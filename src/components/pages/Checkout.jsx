import { useForm } from "react-hook-form";
import { useCart } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/configFirebase";
import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
    const { emptyCart, cart, getTotalPrice } = useCart();
    const [order, setOrder] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const pagar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: getTotalPrice(),
        };

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setOrder(doc.id);
            });
    };

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Checkout</h1>
            <form action="" onSubmit={handleSubmit(pagar)} className="checkout-form">
                <label className="form-label">Nombre:</label>
                <input className="form-input" type="text" placeholder="Tus nombres" {...register("nombre", {required:  true})} />
                
                <label className="form-label">Apellido:</label>
                <input className="form-input" type="text" placeholder="Tu apellido" {...register("apellido", {required:  true})} />
                
                <label className="form-label">Correo:</label>
                <input className="form-input" type="email" placeholder="tucorreo@correo.com" {...register("email", {required:  true})} />
                
                <label className="form-label">Dirección:</label>
                <input className="form-input" type="address" placeholder="Tu dirección" {...register("direccion", {required:  true})} />
                
                <label className="form-label">Teléfono:</label>
                <input className="form-input" type="phone" placeholder="Tu teléfono" {...register("telefono", {required:  true})} />
                
                <p className="total-price">Total: ${getTotalPrice().toLocaleString('es-AR')}</p>
                <ul className="cart-list">
                    {cart.map((producto, index) => (
                        <li key={index} className="cart-item-summary">
                            <img src={producto.img} alt={producto.nombre} className="thumbnail" />
                            <p>{producto.nombre} {producto.descripcion} - ${producto.precio.toLocaleString('es-AR')} x {producto.quantity}</p>
                        </li>
                    ))}
                </ul>
                {!order ? (
                    <div className="checkout-buttons">
                        <button type="submit" className="btn-pay">Pagar</button>
                        <Link to="/" className="btn-cancel"><button onClick={() => { emptyCart() }}>Cancelar compra</button></Link>
                    </div>
                ) : (
                    <div className="confirmation-buttons">
                        <p>Esta seguro?</p>
                        <Link to="/carrito" className="btn-cancel">
                            <button>No</button>
                        </Link>
                        <Link to={`/saludo/${order}`} className="btn-confirm">
                            <button type="button" onClick={() => { emptyCart() }} >Si</button>
                        </Link>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Checkout;
