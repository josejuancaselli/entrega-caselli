import { useState } from 'react';
import ItemCounter from './ItemCounter';
import './itemdetail.css';

const ItemDetail = ({ detail }) => {
    const [selectedSize, setSelectedSize] = useState('');
    
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className="item-detail">
            <div className="item-detail-img">
                <img src={detail.img} alt={detail.nombre} />
            </div>
            <div className="item-detail-info">
                <h2>{detail.nombre} - {detail.descripcion}</h2>
                <p className="loading"> Precio: ${detail.precio.toLocaleString('es-AR')} </p>
                <p>Selecciona tu talle</p>
                <div className="size-buttons">
                    <button onClick={() => handleSizeSelect('XS')} className={`size-btn ${selectedSize === 'XS' ? 'selected' : ''}`}>XS</button>
                    <button onClick={() => handleSizeSelect('S')} className={`size-btn ${selectedSize === 'S' ? 'selected' : ''}`}>S</button>
                    <button onClick={() => handleSizeSelect('M')} className={`size-btn ${selectedSize === 'M' ? 'selected' : ''}`}>M</button>
                    <button onClick={() => handleSizeSelect('L')} className={`size-btn ${selectedSize === 'L' ? 'selected' : ''}`}>L</button>
                    <button onClick={() => handleSizeSelect('XL')} className={`size-btn ${selectedSize === 'XL' ? 'selected' : ''}`}>XL</button>
                </div>
                <ItemCounter detail={detail} selectedSize={selectedSize} />
            </div>
        </div>
    );
}

export default ItemDetail;
