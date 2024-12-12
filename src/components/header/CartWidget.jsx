import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import './header.css';
import ItemWidget from './ItemWidget';

const CartWidget = () => {
  const { getTotalQuantity, cart } = useCart();
  const totalQuantity = getTotalQuantity();

  return (


    <div>
      <div className='cartWidget'>
      <button className="widget-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#a" aria-controls="offcanvasWithBothOptions"><FiShoppingCart className="icon" /></button>
      {totalQuantity > 0 && (<p>{totalQuantity}</p>)}
      </div>
      <div class="widget-canvas offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="a" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Esto es lo que vas a comprar</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          {cart.map((prod)=>{
            return <ItemWidget key={prod.id} prod={prod} />
          })}
        <Link to="/carrito">Ir al carrito</Link>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
