import "./css/form_login.css";
import {useState} from "react"
import Axios from "axios";
import bagImage from './icons/bag.png';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { MainFooter } from "../Components/mainFooter";
function Form_login() {
  const [correo,setCorreo] = useState("");
  const [password,setPassword] = useState("");

  const add = ()=>{
    Axios.post("http://localhost:3001/api/users/login",{
      correo:correo,
      password:password
     
    }).then(response => {
      if(response.data.exist==1){
        console.log(response.data.userID)
        alert(response.data.message);
        if (response.data.tipo == "Vendedor"){
            Cookies.set('session_UserID', response.data.userID);
            window.location.replace('http://localhost:3000/inicio');
        }else{
          Cookies.set('session_UserID', response.data.userID);
          window.location.replace('http://localhost:3000/InicioComprador');
        }
      }else{
        console.log(response.data.userID)
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
            <h1>Iniciar sesión</h1>
          </div>
          <div>
            <label>Email o telefono</label>
          </div>
          <div>
            <input className="Elements" type="text" id="Email" onChange={(event)=>{
              setCorreo(event.target.value);
              }}></input>
          </div>
          <div>
            <label>Contraseña</label>
          </div>
          <div>
            <input className="Elements" type="password" id="password" onChange={(event)=>{
              setPassword(event.target.value);
              }}></input>
          </div>
          <input className="button" type="submit" id="submit" value="Login" onClick={add}></input>
          <label>¿Eres nuevo en shopping express?</label>
      <div className="separator"></div>
        <Link to="/register">
          <button type="submit">Crear tu cuenta</button>
        </Link>
            
      
      </div>
      <MainFooter/>
  </div>
    

);
}

export default Form_login;
