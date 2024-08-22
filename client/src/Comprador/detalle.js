import "./Css/venta_articulo.css";
import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import roku from './roku.jpg';
const Detalle = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [categoria, setCategoria] = useState("");
  const sessionId = Cookies.get('session_UserID');
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCant] = useState("");
  const [desc, setDesc] = useState("");
  const [invent, setInvent] = useState("");

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await Axios.post('http://localhost:3001/api/users/getOneProduct', { id: id });
              const product = response.data.data;
              setNombre(product[0].nombre);
              setCategoria(product[0].categoria);
              setPrecio(product[0].precio);
              setCant(product[0].cantidad);
              setDesc(product[0].descrip);
              setInvent(product[0].inventario);
             
              setIsLoading(false);
          } catch (error) {
              console.error('Error al obtener los productos:', error);
          }
      };

      fetchProducts();
  }, [id]);


  const add = () => {
      Axios.post("http://localhost:3001/api/users/comprarProduct", {
          id_product: id,
          id: sessionId,
          precio: precio
      }).then(response => {
          if (response.data.id == 1) {
              alert(response.data.message);
              window.location.reload();
          } else {
              alert(response.data.message);
          }
      }).catch(error => {
          alert("Error con la comunicación con el servidor");
      });
  };

  if (isLoading) {
      return <div>Loading...</div>;
  }
  
  return (
  <div className="flex-container">
    <div className="foto"> <img src={roku}></img></div>
    <h5 className="carta-title">Nombre del articulo:{nombre}</h5>
    <div className="Descripcion">
         <div className="desc">
         <span >Cantidad del producto:</span >{cantidad}<br></br>
         <span >Descripcion: </span ><span >{desc}</span ><br></br>
         </div>
    </div>
    <div className="Opciones">
      <span className="precio" >${precio}</span>
      <span><a href="">Entrega GRATIS</a> el Viernes, 23 julio</span>
      <span className="Disponible">Disponible.</span>
      <input className="op" type="submit" name="busqueda_btn" value="Agregar a carrito" ></input>
      <input className="op" type="submit" name="busqueda_btn" value="Comprar ya" onClick={add}></input>
    </div>
  </div>

  );
}

export default Detalle;