import React from 'react'
import Logo from '@images/logo.png'


const Header = () => {
  return (
    <header>
        <div>Gestión de productos</div>
        <img src={Logo} width={75}/>
    </header>
  )
}

export default Header