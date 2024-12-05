import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Cart from "./components/pages/Cart"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/itemdetail/ItemDetailContainer"
import Contacto from "./components/pages/Contacto"
import { CartProvider } from "./context/CartContext"
import Checkout from "./components/pages/Checkout"
import Saludo from "./components/pages/Saludo"
import "./App.css"

function App() {


  return (
    <BrowserRouter>
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/carrito" element={<Cart/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/saludo/:order" element= {<Saludo/> }/>
      </Routes>
      </CartProvider>
    </BrowserRouter>

  )
}

export default App
