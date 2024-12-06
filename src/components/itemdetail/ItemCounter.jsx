import React, { useState } from 'react'
import { useCart } from '../../context/CartContext'
import './ItemDetail.css';

const ItemCounter = ({ detail }) => {
    const { addItem } = useCart()
    const [cantidad, setCantidad] = useState(1)

    const increment = () => {
        setCantidad(cantidad + 1);
    };

    const decrement = () => {
        setCantidad(cantidad > 1 ? cantidad - 1 : cantidad);
    };

    return (
        <div className='item-counter'>
            <div className='item-counter-controls'>
                <button onClick={() => { decrement(cantidad) }} >-</button>
                <p>Cantidad: {cantidad}</p>
                <button onClick={() => { increment(cantidad) }}>+</button>
            </div>
            <button onClick={() => { addItem(detail, cantidad) }} className='item-counter-add'>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCounter