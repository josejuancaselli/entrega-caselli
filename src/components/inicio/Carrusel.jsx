import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/configFirebase";
import { Link } from "react-router-dom";

const Carrusel = ({ categoria }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const q = query(collection(db, "products"), where("categoria", "==", categoria));
      const snapshot = await getDocs(q);
      const productList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductos(productList);
    };

    fetchProductos();
  }, [categoria]);

  return (


    <div id={`carousel-${categoria}`} className="carousel slide carousel-fade" data-bs-ride="carousel">

      <div className="carousel-inner">
        {productos.map((producto, index)=>(
          <div key = {producto.id} className={`carousel-item ${index === 0 ? 'active' : '' }`}> 
            <Link to={`/productos/${producto.categoria}`}><img src={producto.img} className="d-block w-100" alt={producto.nombre}/></Link>
            <p className="carousel-caption">{producto.descripcion}</p>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${categoria}`} data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>

<button className="carousel-control-next" type="button" data-bs-target={`#carousel-${categoria}`} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
    </div>




  );
};

export default Carrusel;
{/* <div id={`carousel-${categoria}`} className="carousel slide carousel-fade">

<div className="carousel-inner">
    {productos.map((producto, index) => (
        <div key={producto.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <Link to={`/productos/${producto.categoria}`}><img src={producto.img} className="d-block w-100" alt={producto.nombre} /></Link>
        </div>
    ))}
</div>

<button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${categoria}`} data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>

<button className="carousel-control-next" type="button" data-bs-target={`#carousel-${categoria}`} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>

</div> */}