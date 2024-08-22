import Cookies from 'js-cookie';
export const verificarUsuario = () => {
    const sessionId = Cookies.get('session_UserID');
    if(sessionId != undefined){
        console.log("Todo bien" + ` ID:${sessionId}`);
    }else{
        alert("Debe de iniciar sesion antes");
        window.location.replace('http://localhost:3000/login');
        console.log("Usuario no logueado");
    }

};