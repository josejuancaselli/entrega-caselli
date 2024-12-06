import { useEffect, useState } from "react";


const useCartLogic = () => {

    const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(carritoInicial);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addItem = ((itemToAdd, quantity, size) => {
        const newCart = [...cart];
        const inCart = newCart.find(item => item.id === itemToAdd.id);
        inCart ? inCart.quantity += quantity : newCart.push({ ...itemToAdd, quantity: quantity, talle: size});
        setCart(newCart);
    })

    const incrementCart = (prod) => {
        addItem(prod, 1);  
    };

    const decrementCart = (prod) => {
        if (prod.quantity > 1) {
            addItem(prod, -1);  
        }
    };

    const getTotalQuantity = (() => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    });

    const emptyCart = (() => {
        setCart([])
    })

    const getTotalPrice = (() => {
        return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
    })

    const removeItem = ((id) =>{
        const cartUpdated = cart.filter( prod => prod.id !== id)
        setCart(cartUpdated)
    })

    return {
        cart,
        addItem,
        getTotalQuantity,
        emptyCart,
        getTotalPrice,
        incrementCart,
        decrementCart,
        removeItem
    }
}

export default useCartLogic