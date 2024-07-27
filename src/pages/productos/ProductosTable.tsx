import Modal from '@components/Modal';
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

  // Funcion para editar un producto
  const editarProducto = (producto: ColumnasProductos) => () => {
    // Mostrar el modal de edicion
  }

  // Funcion para eliminar un producto
  const eliminarProducto = (producto: ColumnasProductos) => () => {
    // @ts-ignore
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
      // @ts-ignore
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the product from the database
        fetch(`http://localhost:3000/productos/${producto.id}`, {
          method: "DELETE"
        }).then(() => {
            // @ts-ignore
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
        })
        
        
      }
    });
  }


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
    // Bottones de acciones
    {
      cell: (row: ColumnasProductos) => (
        <div>
          <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={editarProducto(row)} className="btn btn-primary">Editar</button>
          <button className="btn btn-danger" onClick={eliminarProducto(row)} >Eliminar</button>
        </div>
      )
    }
];

  return (
    <div className="container my-5">
      <DataTable columns={columns} data={productos} />

      <Modal />
    </div>
  )
}

export default ProductosTable