import React from 'react'
import { Link } from 'react-router-dom'

const MenuHorizontal = () => {
  return (
    <nav>
        <ul>
            <Link to={'/'}><li>Inicio</li></Link>
            <Link to={'/productos'}><li>Productos</li></Link>
            <Link to={'/contactos'}><li>Contactos</li></Link>
        </ul>
    </nav>
  )
}

export default MenuHorizontal