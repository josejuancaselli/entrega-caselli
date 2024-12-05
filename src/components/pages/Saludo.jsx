import { useParams } from "react-router-dom";

const Saludo = () => {
    const { order } = useParams(); 

    return (
        <div className="saludo-container">
            <h1 className="saludo-title">Gracias por su compra!</h1>
            {order && <p className="saludo-order-number">Su número de orden es: {order}</p>}
        </div>
    );
};

export default Saludo;
