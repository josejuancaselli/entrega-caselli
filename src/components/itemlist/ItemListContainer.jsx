import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/configFirebase'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import './itemList.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        const productosRef =  categoria ? query(collection(db, "products"), where("categoria", "==", categoria)) : collection(db, "products")            
        getDocs(productosRef)
        .then ((resp) =>{
            setProducts(
                resp.docs.map((doc)=>{
                    return{...doc.data(), id: doc.id}
                })
            )
        })
    }, [categoria])

    return (
        <div>
        <h1 className='container-title'>Los mejores productos de Adidas a un Click de distancia</h1> 
        
        
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer