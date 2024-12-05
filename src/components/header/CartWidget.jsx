import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const totalQuantity = getTotalQuantity();

  return (
    <div className='cartWidget'>
      <Link to="/carrito"><FiShoppingCart className="icon" /></Link>
      {totalQuantity > 0 && (<p>{totalQuantity}</p>)}
    </div>
  );
};

export default CartWidget;
