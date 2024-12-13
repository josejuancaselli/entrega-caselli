import React, { useEffect } from 'react'
import { useFetchProducts } from '../../hooks/useProducts'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/configFirebase'

const Remeras = () => {

    useEffect(() => {
        const productosRef = getDoc(doc(collection(db, "products", categoria)))
        console.log(productosRef)
        .then(response => {
            const art = response.docs.map((doc) => ( console.log(doc)));
            
            console.log(art.find((item) => item.category === "Remeras"))
        })
        .then ()
},)

  return (
    <div>Remeras</div>
  )
}

export default Remeras