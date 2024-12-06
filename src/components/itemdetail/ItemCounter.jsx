import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const ItemCounter = ({ detail, selectedSize }) => {
    const { addItem } = useCart();
    const [cantidad, setCantidad] = useState(1);

    const increment = () => {
        setCantidad(cantidad + 1);
    };

    const decrement = () => {
        setCantidad(cantidad > 1 ? cantidad - 1 : cantidad);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            Toastify({
                text: "¡Selecciona un talle antes de agregar al carrito!",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #ff5f6d, #ffc3a0)",
                },
            }).showToast();
            return;
        }
        addItem(detail, cantidad, selectedSize);
    };

    return (
        <div className='item-counter'>
            <div className='item-counter-controls'>
                <button onClick={handleAddToCart} className='item-counter-add'>Agregar al Carrito</button>
                <button onClick={() => { decrement(cantidad) }}>-</button>
                <p>Cantidad: {cantidad}</p>
                <button onClick={() => { increment(cantidad) }}>+</button>
            </div>
        </div>
    );
};

export default ItemCounter;
