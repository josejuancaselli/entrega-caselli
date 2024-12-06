import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/configFirebase'
import SearchItems from './SearchItems'
import "./inicio.css"


const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        const productosRef = collection(db, "products")
        getDocs((productosRef))
            .then((snapshot) => {
                const productList = snapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
                setProducts(productList)
            })
    }, [])

    useEffect(() => {
        if (searchQuery) {
            const searchWords = searchQuery.toLocaleLowerCase().split(" ")
            const filtered = products.filter((product) => {
                return searchWords.every((word) => product.descripcion.toLowerCase().includes(word) || product.nombre.toLowerCase().includes(word))
            });
            setFilteredProducts(filtered);
        } else{
            setFilteredProducts([])
        }
    }, [searchQuery, products]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
    }

    return (
        <div>
            <div className="search-bar">
                <input type="text" placeholder="Buscar productos..." value={searchQuery} onChange={handleSearchChange} />
            </div>
            {/* <ItemList products={filteredProducts} /> */}
            <SearchItems products={filteredProducts}/>
        </div>
    )
}

export default SearchBar

