import React from 'react'
import Title from './Title'
import Navbar from './Navbar'
import CartWidget from './CartWidget'
import './Header.css';

const Header = () => {
  return (
    <header>
        <Title/>
        <Navbar/>
        <CartWidget/>
    </header>
  )
}

export default Header