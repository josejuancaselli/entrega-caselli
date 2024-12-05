import { useState } from "react";

const useCounter = (initialValue = 1) => {

    const [cantidad, setCantidad] = useState(initialValue)

    const increment = () => {
        setCantidad(cantidad + 1);
    };

    const decrement = () => {
        setCantidad(cantidad > 1 ? cantidad - 1 : cantidad);
    };

    return {
        increment,
        decrement,
        cantidad
    }

}

export default useCounter