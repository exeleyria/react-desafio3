
import React, { useState } from 'react';

const ItemListContainer = () => {
    const [articulos, setUsers] = useState([
        { id: 1, artName: 'TECLADO', descripcion: 'Teclado Mecanico', precio: '$10.000,00' },
        { id: 2, artName: 'KEYCAPS', descripcion: 'Teclas customizables', precio: '$5.800,00' },
        { id: 3, artName: 'SWITCH', descripcion: 'Switches mecanicos', precio: '$7.000,00' }
    ]);


    return (
        <div className="container">
        <h3 className="p-3 text-center">Catálogo de Productos</h3>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Articulo</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {articulos && articulos.map(articulo =>
                    <tr key={articulo.id}>
                        <td>{articulo.artName}</td>
                        <td>{articulo.descripcion}</td>
                        <td>{articulo.precio}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    );
}

export default ItemListContainer;
