import React from 'react'
import Title from './header/Title'
import Navbar from './header/Navbar'
import CartWidget from './header/CartWidget'


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