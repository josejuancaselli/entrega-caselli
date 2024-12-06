import { useEffect, useState } from 'react';
import ItemCounter from './ItemCounter'
import './ItemDetail.css';

const ItemDetail = ({ detail }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='item-detail'>
            <img src={detail.img} alt={detail.nombre} />
            <div>
                <h2>{detail.nombre} {detail.descripcion}</h2>
                <p>Selecciona tu talle</p>
                <div>
                    <button>XS</button>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div>
                <p className='loading'>
                    {isLoading ? 'Cargando...' : (detail.precio && !isNaN(detail.precio)) ? `Precio: $${detail.precio.toLocaleString('es-AR')}` : 'Cargando...'}
                </p>
                <ItemCounter detail={detail} />
            </div>
        </div>
    )
}

export default ItemDetail
