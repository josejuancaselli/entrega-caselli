import React from 'react';
import { Link } from 'react-router-dom';

const SearchItems = ({ products }) => {
    return (
        <ul className="search-items">
            {products.map((item) => {
                return (
                    <Link to={`/item/${item.id}`}>
                        <li key={item.id}>
                            <img src={item.img} alt={item.nombre} />
                            <div>
                                <h2>{item.nombre}</h2>
                                <p>{item.descripcion}</p>
                            </div>
                        </li>
                    </Link>
                );
            })}
        </ul>
    );
};

export default SearchItems;
