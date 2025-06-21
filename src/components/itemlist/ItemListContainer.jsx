
import { useEffect } from "react";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import './itemlist.css';
import { useFetchProducts } from '../../hooks/useProducts';
import Loading from '../loading/Loading';

const ItemListContainer = () => {
    const { categoria } = useParams();
    const { products, loading } = useFetchProducts(categoria);

    return (
        <div className="container py-4">
            {loading ? (
                <Loading />
            ) : (
                
                <main>
                    <h1 className="text-center mb-4">{products[0]?.categoria || "Productos"}</h1>
                    <ItemList products={products} />
                </main>
            )}
        </div>
    );
};

export default ItemListContainer;
