import { Link } from "react-router-dom";
import'./css/catalogo.css';
import box from './icons/box.png';
function Catalogo(){
    return(
      <>  
      <div className="buscador_catalogo">
        <img src={box} alt="Imagen de una caja" height="90%"/>
        <div className="conteiner">
          <h3>Antes de empezar a vender un producto</h3>
          <h1>Puedes buscar en el catalogo si el articulo ya se encuentra en existencia</h1>
          <input type="text" />
        </div>
        
      </div>
      <div className="footer-catalogo">
        <h1>Acerca de como añadir productos</h1>
        <div className="consejos">
          <div className="card-f">
            <h2 className="title">Añadir productos</h2>
            <label>Primeros pasos para saber todo el proceso de añadir un prodcuto</label>
            <a>Más información</a>
          </div>
          <div className="card-f">
            <h2 className="title">Pendientes de cobro</h2>
            <label>Primeros pasos para saber todo el proceso de añadir un prodcuto</label>
            <a>Más información</a>
          </div>
          <div className="card-f">
            <h2 className="title">Devoluciones de producto</h2>
            <label>Primeros pasos para saber todo el proceso de añadir un prodcuto</label>
            <a>Más información</a>
          </div>
          <div className="card-f">
            <h2 className="title">Asignacion de categorias</h2>
            <label>Primeros pasos para saber todo el proceso de añadir un prodcuto</label>
            <a>Más información</a>
          </div>
          <div className="card-f">
            <h2 className="title">Calificaciones de productos</h2>
            <label>Primeros pasos para saber todo el proceso de añadir un prodcuto</label>
            <a>Más información</a>
          </div>

        </div>
        
      </div>
      </>
      
    );


}
export default Catalogo;