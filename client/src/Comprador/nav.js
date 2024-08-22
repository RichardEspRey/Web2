import "./Css/header.css";
import Cookies from 'js-cookie';
import cameraImage from './Css/img/Logo2.png';
import lupa from './Css/img/lupa.png';
import { verificarUsuario } from '../Librerias/functions'; 
import React, { useEffect } from 'react';
const Nav_comprador = () => {

  useEffect(() => {
    verificarUsuario();
}, []);
const cerrar_sesion = () => {
  Cookies.remove('session_UserID');
  window.location.replace('http://localhost:3000/login');
};
  return (
    <div className="header">
      <a href="/" className="MarcaHeader">
        <div>
          <img src={cameraImage} />
        </div>
      </a>
      <a href="/categorias" className="categorias">
        <div className="Contenedor-botones-header">
          <span>Todas las categorias</span>
        </div>
      </a>
      <div className="search-container">
        <input className="Cuadro_busqueda" type="search" name="busqueda" placeholder="Buscar..."></input>
      </div>
      <a href="http://localhost/BDM/MVC/Modelo/functions_Perfil.php?op=Perfil" className="cuenta">
        <div className="Contenedor-botones-header">
          <span>Hola, identifícate</span>
          <span className="class-span">Cuenta y Listas</span>
        </div>
      </a>
      <a href="/devoluciones" className="cuenta">
        <div className="Contenedor-botones-header">
          <span>Devoluciones</span>
          <span className="class-span">Y pedidos</span>
        </div>
      </a>
      <a className="botones_a"  onClick={cerrar_sesion}>Cerrar sesion</a>
    </div>
  );
}

export default Nav_comprador;
