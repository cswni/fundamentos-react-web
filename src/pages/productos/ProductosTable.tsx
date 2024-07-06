import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";

interface ColumnasProductos {
  id: number;
  nombre: string;
  codigo: string;
  precio: string;
  disponible: string;
}

const ProductosTable = () => {
  //Hooks
  const [productos, setProductos] = useState([]);

  // Cargar los productos dentro de useEffect
  // Datos de la tabla. Aca se definen los datos que
  // se van a mostrar en la tabla. 
  // ACA SE HACE LA LLAMADA A LA API CON LA RUTA DE LOS PRODUCTOS
  useEffect(() => {
    fetch('http://localhost:3000/productos')
      .then(response => response.json())
      .then(data => setProductos(data))
  }, [])


  // Columnas de la tabla. Aca se definen los nombres
  // de las columnas como estan en la base de datos
  const columns = [
    {
        name: "ID",
        selector: (row: ColumnasProductos) => row.id
    },
    {
        name: "Nombre",
        selector: (row: ColumnasProductos) => row.nombre
    },
    {
        name: "Codigo",
        selector: (row: ColumnasProductos) => row.codigo
    },
    {
        name: "Precio",
        selector: (row: ColumnasProductos) => row.precio
    },
    {
      name: "Disponible",
      selector: (row: ColumnasProductos) => row.disponible
    },
];

  return (
    <div className="container my-5">
      <DataTable columns={columns} data={productos} />
    </div>
  )
}

export default ProductosTable