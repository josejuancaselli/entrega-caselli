import { useCart } from "../../context/CartContext";
import "./Cart.css";
const CartItem = ({ prod }) => {

    const { incrementCart, decrementCart, removeItem } = useCart();
    const handleRemove = ((id) => { removeItem(id) })

    return (
        <div key={prod.id} className="cart-item">
            <img src={prod.img} alt={prod.nombre} className="cart-item-thumbnail"/>
            <h2>{prod.nombre} {prod.descripcion}</h2>
            <p>${prod.precio.toLocaleString('es-AR')}</p>
            <div className="cart-item-quantity">
                <button onClick={() => { decrementCart(prod) }}>-</button>
                <p>Cantidad: {prod.quantity}</p>
                <button onClick={() => { incrementCart(prod) }}>+</button>
            </div>
            <button onClick={() => { handleRemove(prod.id) }}>Quitar producto</button>
        </div>
    );
};

export default CartItem;
