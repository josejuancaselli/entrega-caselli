import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './itemdetail.css';
import Loading from '../loading/Loading';
import { useFetchProductById } from '../../hooks/useProducts';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { detail, loading } = useFetchProductById(id)

    return (
        <div className='item-detail-container'>
            {loading ? <Loading /> : <ItemDetail detail={detail} />}
        </div>
    );
}

export default ItemDetailContainer