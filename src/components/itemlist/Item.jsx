import React from 'react'
import { Link } from 'react-router-dom'
import './ItemList.css';

const Item = ({ product }) => {
    
    return (
        <div key={product.id}>
            <img src={product.img} alt={product.nombre} />
            <h2>{product.nombre} {product.descripcion}</h2>
            <p>${product.precio.toLocaleString('es-AR')}</p>
            <Link to={`/item/${product.id}`}>Ver más</Link>
        </div>
    )
}

export default Item