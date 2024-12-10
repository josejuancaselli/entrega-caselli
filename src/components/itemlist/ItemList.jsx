import React from 'react'
import Item from './Item'
import './itemlist.css';

const ItemList = ({ products }) => {



    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-5 gy-7">
            {products.map((item) => (
                <div className="col" key={item.id}>
                    <Item product={item} />
                </div>
            ))}
        </div>

    )
}

export default ItemList