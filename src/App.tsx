import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from 'react'
import Header from '@components/Header'
import Card from '@components/Card'
import MenuHorizontal from '@components/MenuHorizontal'
import { Route, Routes } from 'react-router-dom'
import ProductosTable from "./pages/productos/ProductosTable";

const App = () => {
  return (
    <>
        <Header />
        <MenuHorizontal />
        
        <main>
          <Routes>
            <Route path="/" element={<Card title='Inicio' body='Estamos en la pagina principal' />} />
            <Route path="/productos" element={<Card title='Lista de productos' body={<ProductosTable />} />} />
            <Route path="/contactos" element={<Card title='Mis contactos' body='Contactos' />} />
          </Routes> 
        </main>
    </>
  )
}


export default App