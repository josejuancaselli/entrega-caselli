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
            <h2>{detail.nombre} {detail.descripcion}</h2>
            <img src={detail.img} alt={detail.nombre} />
            <p className='loading'>
                {isLoading ? 'Cargando...' : (detail.precio && !isNaN(detail.precio)) ? `Precio: $${detail.precio.toLocaleString('es-AR')}` : 'Cargando...'}
            </p>
            <ItemCounter detail={detail} />
        </div>
    )
}

export default ItemDetail
