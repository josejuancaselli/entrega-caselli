import React from 'react';
import { Link } from 'react-router-dom';
import './itemlist.css';

const Item = ({ product }) => {
    return (
        <div className="tarjeta ">
            <Link to={`/item/${product.id}`} className="text-decoration-none">
                <img src={product.img} alt={product.nombre} className="tarjeta-img" />
                <div className="info">
                    <h3>{product.nombre}</h3>
                    <p>{product.descripcion}</p>
                    <p>${product.precio.toLocaleString('es-AR')}</p>
                    <button className="tarjeta-button">Ver más</button>
                </div>
            </Link>
        </div>
    );
};

export default Item;
