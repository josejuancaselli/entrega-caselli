import { useCart } from '../../context/CartContext'

const ItemWidget = ({prod}) => {
    const {removeItem} = useCart()
    const handleRemove = ((id) => { removeItem(id) })
    return (
        <div key={prod.id} className="cart-item">
            <img src={prod.img} alt={prod.nombre} className="cart-item-thumbnail" />
            <h2>{prod.nombre} {prod.descripcion}</h2>
            <p> x {prod.quantity}</p>
            <p>${prod.precio.toLocaleString('es-AR')} C/U</p>
            <button onClick={() => { handleRemove(prod.id) }}>Quitar</button>
        </div>
    )
}

export default ItemWidget