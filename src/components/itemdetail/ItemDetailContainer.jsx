import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/configFirebase';
import ItemDetail from './ItemDetail';
import './itemdetail.css';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})
    const { id } = useParams();

    useEffect(() => {
        getDoc(doc(db, "products", id))
            .then((querySnapshot) => {
                const prod = { ...querySnapshot.data(), id: querySnapshot.id };
                setDetail(prod)
            })
    }, [id])

    return (
        <div className='item-detail-container'>
            <ItemDetail detail={detail} />
        </div>
    )
}

export default ItemDetailContainer