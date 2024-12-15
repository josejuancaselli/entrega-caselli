import { Link } from 'react-router-dom';

const SearchItems = ({ products }) => {
    return (
        <ul className="search-items">
            {products.map((item) => {
                return (
                    <Link to={`/item/${item.id}`}>
                        <li key={item.id}>
                            <img src={item.img} alt={item.nombre} />
                            
                                <h2>{item.nombre}</h2>
                                <p>{item.descripcion}</p>
                            
                        </li>
                    </Link>
                );
            })}

            {products[0] && <Link to={`/productos/${products[0]?.categoria}`} className='search-button'>Ver más</Link>}

        </ul>
    );
};

export default SearchItems;
