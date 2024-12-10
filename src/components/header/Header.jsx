import React from 'react'
import Title from './Title'
import Navbar from './Navbar'
import CartWidget from './CartWidget'
// import './header.css';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Title />
        <Navbar />
        <CartWidget />
      </div>
    </header>
  )
}

export default Header