import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";


const Cart = () => {

    const { emptyCart, cart, getTotalPrice } = useCart()
    const totalPrice = getTotalPrice()

    return (
        <div className="cart-container">
            <h1>Carrito</h1>
            {cart.map((prod) => {
                return (
                    <CartItem key={prod.id} prod={prod} />
                )
            })}
            {totalPrice > 0 && <p>Precio final: ${totalPrice.toLocaleString('es-AR')}</p>}
            <div className="cart-container-buttons">
                <button onClick={emptyCart} className="empty-cart">Vaciar</button>
                <button className="checkout-button"><Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>Ir a pagar</Link></button>
            </div>
        </div>
    )
}

export default Cart

