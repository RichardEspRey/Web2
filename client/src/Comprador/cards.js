import "./Css/header.css";
import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { Link } from "react-router-dom";
import roku from './roku.jpg';
const Cards_Ventas = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
          const response = await Axios.post('http://localhost:3001/api/users/getAllProducts', {
              
          });
          // Actualizar el estado de los productos con los datos obtenidos
          setProducts(response.data.data);
          setLoading(false); 
          // Terminar el estado de carga
         console.log(products[0]);
      } catch (error) {
          console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
}, []);
if (loading) {
  return <div>Loading...</div>; // Mostrar un indicador de carga mientras se obtienen los datos
}
  
  return (
    <div className="cartas">
      <h1>Ultimos productos</h1>
      <div className="container_cartas">{products[0].map((product) => (
          <div className="carta" key={product.productos_ID}>
            <img src={roku} className="card-img-top" />
            <div className="carta-body">
              <h5 className="carta-title">{product.nombre}</h5>
              <p className="carta-text">{product.descrip}</p>
              <h2 className="carta-text">${product.precio}</h2>
              <Link to={`/DetalleCompra/${product.productos_ID}`}><button className="btn_comprar">Comprar</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards_Ventas;