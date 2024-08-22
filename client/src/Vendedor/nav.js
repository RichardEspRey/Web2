import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./css/nav.css";
import { verificarUsuario } from '../Librerias/functions'; 
import Cookies from 'js-cookie';
function Nav(){
  
    useEffect(() => {
        verificarUsuario();
    }, []);
    const cerrar_sesion = () => {
      Cookies.remove('session_UserID');
      window.location.replace('http://localhost:3000/login');
    };
    return(
        <nav>

            <div className="Menu_botones">
                <Link className="botones_a"  to="/catalogo">Catalogo</Link>
            </div>
            <div className="Menu_botones">
                <Link className="botones_a"  to="/addProd">Añadir producto</Link>
            </div>
            <div className="Menu_botones">
            <Link className="botones_a" to="/inventario">Inventario</Link>
            </div>
            <div className="Menu_botones">
                <a className="botones_a"  >Pedidos</a>  
            </div>
            <div className="Menu_botones">
              <a className="botones_a" >Mensajes</a>
            </div>
            <div className="Menu_botones">
                <a className="botones_a" >Mi perfil</a>
            </div>
            <div className="Menu_botones">
                <a className="botones_a" >Ayuda</a>
            </div>
            <div className="Menu_botones">
                <a className="botones_a"  onClick={cerrar_sesion}>Cerrar sesion</a>
            </div>
        </nav>
    );
}

export default Nav;