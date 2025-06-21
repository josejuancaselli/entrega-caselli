import { useState, useEffect } from "react";
import { collection, getDoc, getDocs, query, where, doc } from "firebase/firestore";
import { db } from "../firebase/configFirebase";
import { useCart } from "../context/CartContext";

const useFetchProducts = (categoria) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {

                const productosRef = categoria ?
                    query(collection(db, "products"), where("categoria", "==", categoria)) :
                    collection(db, "products");
                const snapshot = await getDocs(productosRef);
                const productList = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                console.log(productList);
                setProducts(productList);
            } catch (error) {
                console.error("Error al cargar productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoria]);

    return { products, loading };
};

const useFetchProductById = (id) => {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const querySnapshot = await getDoc(doc(db, "products", id));
                if (querySnapshot) {
                    const prod = { ...querySnapshot.data(), id: querySnapshot.id };
                    setDetail(prod);
                } else {
                    console.warn("Producto no encontrado con id:", id);
                }
            } catch (error) {
                console.error("Error trayendo el product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct()
    }, [id]);

    return { detail, loading };
};

export { useFetchProducts, useFetchProductById };


