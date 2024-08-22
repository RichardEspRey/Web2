import "./css/form_login.css";
import {useState} from "react"
import bagImage from './icons/bag.png';
import Axios from "axios";
import { Link } from "react-router-dom";
function Form_register() {
  const [nombre,setNombre] = useState("");
  const [email,setCorreo] = useState("");
  const [password,setPassword] = useState("");
  const [tipo,setTipo] = useState("");

  const add = ()=>{
    Axios.post("http://localhost:3001/api/users/register",{
      nombre:nombre,
      email:email,
      password:password,
      tipo:tipo
      
    }).then(response => {
      
      if(response.data.id==1){
        //en dado caso de que si se haya hecho con exito el registro
        console.log(response.data.id)
        alert(response.data.message);
        window.location.replace('http://localhost:3000/login');//provicional, cambiar a history para uso completo de las funciones de ract
      }else{
        console.log(response.data.id)
        alert(response.data.message);
      }
       // Muestra el mensaje enviado desde el servidor
    }).catch(error=>{
      alert("Error con la comuniacion con el servidor");
    });
  }
return (
    <div className="form_login">
      <div className="contenedor">
        <img src={bagImage} alt="Imagen de una bolsa" width="35%" />
          <div>
            <h1>Crear cuenta</h1>
          </div>
          <div>
            <label>Nombre</label>
          </div>
          <div>
            <input className="Elements" type="text" id="Nombre" onChange={(event)=>{
              setNombre(event.target.value);
              }}></input>
          </div>
          <div>
            <label>Numero de celular o Correo</label>
          </div>
          <div>
            <input className="Elements" type="text" id="Email" onChange={(event)=>{
              setCorreo(event.target.value);
              }}></input>
          </div>
          <div>
            <select className ="option" name="Tipo" onChange={(event)=>{
              setTipo(event.target.value);
              }}>
              <option value="Comprador">Comprador</option>
              <option value="Vendedor">Vendedor</option>
            </select>
          </div>
          <div>
            <label>Contraseña</label>
          </div>
          <div>
            <input className="Elements" type="text" id="password" onChange={(event)=>{
              setPassword(event.target.value);
              }}></input>
          </div>
          <input className="button" type="submit" id="submit" value="Continuar" onClick={add}></input>
          <label>¿Eres nuevo en shopping express?</label>
            <div className="separator"></div>
            <Link to="/login">
              <button className="button" type="submit" >Login</button>
            </Link>
            
      </div>
    </div>
  );
}

export default Form_register;