import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import "./cart.css";

const Cart = () => {
    const { emptyCart, cart, getTotalPrice } = useCart();
    const totalPrice = getTotalPrice();

    return (
        <div className="cart-container">
            {cart.length === 0 ?
                (<div data-bs-dismiss="offcanvas"><p>Su carrito esta vacío </p><Link to="/">Seguir comprando</Link></div>) :
                (<div>
                    {cart.map((prod) => (
                        <CartItem key={prod.id} prod={prod} />
                    ))}
                    {totalPrice > 0 && <p>Precio final: ${totalPrice.toLocaleString('es-AR')}</p>}
                    <div className="cart-container-buttons" data-bs-dismiss="offcanvas">
                        <button className="checkout-button">
                            <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>Ir a pagar</Link>
                        </button>
                        <button onClick={emptyCart} className="empty-cart">Vaciar</button>
                    </div>
                </div>
                )}
        </div>
    );
}

export default Cart;
