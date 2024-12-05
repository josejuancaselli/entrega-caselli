import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {


    
    return (
        <div className="container">
            <h1>{products.nombre}</h1>
            {products.map((item) => {
                return (
                    <Item key={item.id} product={item} />
                )
            })}
        </div>
    )
}

export default ItemList