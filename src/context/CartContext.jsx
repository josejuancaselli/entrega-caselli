import { createContext, useContext } from "react";
import useCartLogic from "../hooks/useCartLogic";


const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const cartLogic = useCartLogic()

    return (
        <CartContext.Provider value={cartLogic}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}