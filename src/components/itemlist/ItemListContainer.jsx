
import { useEffect } from "react";
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import './itemlist.css';
import {useFetchProducts} from '../../hooks/useProducts'
import { useCart } from '../../context/CartContext'
import Loading from '../loading/Loading'

const ItemListContainer = () => {
    const { categoria } = useParams();
    const { products, loading } = useFetchProducts(categoria);
    

    return (
        <div>
            {loading ?
                <Loading /> :
                <main>
                    <h1 className='container-title'>{...products[0].categoria}</h1>
                    <ItemList products={products} />
                </main>}
        </div>
    )
}

export default ItemListContainer