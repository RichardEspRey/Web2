import React , { useEffect, useState }from 'react';
import "./css/addProd.css";
import Cookies from 'js-cookie';
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import Axios from "axios";
const Inventario = () => {
    const [products, setProducts] = useState([]);
    var id_sesion = Cookies.get('session_UserID');
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await Axios.post('http://localhost:3001/api/users/getProducto', {
                    id:id_sesion
                });
                // Actualizar el estado de los productos con los datos obtenidos
                setProducts(response.data.data);
                // Terminar el estado de carga
               
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        // Llamada a la función fetchProducts para obtener los datos
        fetchProducts();
    }, []); // El array vacío [] asegura que esto se ejecute una vez al montar el componente

    const columns = [
        { name: 'ID', selector: row => row.productos_ID, sortable: true, width: '70px' },
        { name: 'Nombre', selector: row => row.nombre, sortable: true, width: '200px' },
        { name: 'Precio', selector: row => row.precio, sortable: true, width: '100px' },
        { name: 'Cantidad', selector: row => row.cantidad, sortable: true, width: '100px' },
        { name: 'Descripción', selector: row => row.descrip, sortable: true, width: '250px' },
        { name: 'Inventario', selector: row => row.inventario, sortable: true, width: '150px' },
        { name: 'Categoria', selector: row => row.Categoria, sortable: true, width: '150px' },
        { name: 'Acciones', cell: row => (<Link to={`/editProd/${row.productos_ID}`}><button>Editar</button></Link>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];
    return( 
    <div className='producto'>
        <h2>Géstion de inventario</h2>
        <div className="users-table" >
            <DataTable
                    columns={columns}
                    data={products}
            />
        </div>
    </div>
    );
};

export default Inventario;