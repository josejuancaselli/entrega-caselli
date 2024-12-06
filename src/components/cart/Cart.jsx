import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
    const { emptyCart, cart, getTotalPrice } = useCart();
    const totalPrice = getTotalPrice();

    return (
        <div className="cart-container">
            <h1>Carrito</h1>
            {cart.length === 0 ? ( <div><p>Su carrito esta vacío </p><Link to="/">Seguir comprando</Link></div>)
                : (<div>
                    {cart.map((prod) => (
                        <CartItem key={prod.id} prod={prod} />
                    ))}
                    {totalPrice > 0 && <p>Precio final: ${totalPrice}</p>}
                    <div className="cart-container-buttons">
                        <button onClick={emptyCart} className="empty-cart">Vaciar</button>
                        <button className="checkout-button">
                            <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>Ir a pagar</Link>
                        </button>
                    </div>
                </div>
                )}
        </div>
    );
}

export default Cart;
