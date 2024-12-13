import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Cart from "./components/cart/Cart"
import ItemListContainer from "./components/itemlist/ItemListContainer"
import ItemDetailContainer from "./components/itemdetail/ItemDetailContainer"
import Contacto from "./components/contacto/Contacto"
import { CartProvider } from "./context/CartContext"
import Checkout from "./components/checkout/Checkout"
import "./App.css"
import Inicio from "./components/inicio/Inicio"
import Footer from "./components/footer/Footer"


function App() {


  return (
    <div className ="app">
      <BrowserRouter >
        <CartProvider >
          
          <Header />
          
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
          
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
