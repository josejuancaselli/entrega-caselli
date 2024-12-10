import React from 'react';
import { Link } from 'react-router-dom';
import './itemlist.css';

const Item = ({ product }) => {
    return (
        <div className="card h-100 text-center">
            <Link to={`/item/${product.id}`} className="text-decoration-none text-dark">
                <img src={product.img} alt={product.nombre} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{product.nombre} {product.descripcion}</h5>
                    <p className="card-text">${product.precio.toLocaleString('es-AR')}</p>
                </div>
            </Link>
        </div>
    );
};

export default Item;
