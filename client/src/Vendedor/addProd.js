import React , {useEffect, useState }from 'react';
import "./css/addProd.css";
import Cookies from 'js-cookie';
import Axios from "axios";
function AddProd(){
    const [selectedImage, setSelectedImage] = useState(null);
    const sessionId = Cookies.get('session_UserID');
    const [nombre,setNombre] = useState("");
    const [precio,setPrecio] = useState("");
    const [cantidad,setCant] = useState("");
    const [desc,setDesc] = useState("");
    const [invent,setInvent] = useState("");
    

    const [categories, setCategories] = useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        try {
            const response = await Axios.post('http://localhost:3001/api/users/getCategories', {
                
            });
            // Actualizar el estado de los productos con los datos obtenidos
            setCategories(response.data.data);
            // Terminar el estado de carga
           console.log(categories);
           
           
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
      };
  
      fetchProducts();
  }, []);



  let userElements = categories.map(function(user) {
    return (
      <option key={user.categoria_id} value={user.categoria_id}>
        {user.Nombre}
      </option>
    );
  });

    //funcion para colocar la imagen
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    };


    const add = ()=>{
        Axios.post("http://localhost:3001/api/users/registerProduct",{
          id: sessionId,
          nombre:nombre,
          precio:precio,
          cantidad:cantidad,
          desc:desc,
          invent:invent
          
        }).then(response => {
          
          if(response.data.id==1){
            //en dado caso de que si se haya hecho con exito el registro
            console.log(response.data.id)
            alert(response.data.message);
            window.location.reload();//provicional, cambiar a history para uso completo de las funciones de ract
          }else{
            console.log(response.data.id)
            alert(response.data.message);
          }
           // Muestra el mensaje enviado desde el servidor
        }).catch(error=>{
          alert("Error con la comuniacion con el servidor");
        });
      }
      const clear = ()=>{
        window.location.reload();
      }
    return(

        <div className='producto'>
            <div className='contenedor-producto'>
                <h2>Añadir producto</h2>
                {selectedImage && (
                <img src={selectedImage} alt="Selected" style={{ maxWidth: '200px', maxHeight:'200px'}} />
            )}
                <div className='group-labels'>
                    <label htmlFor="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={handleImageChange}/>
                </div>
                
                <div className='group-labels'>
                    <label>Titulo del producto</label>
                    <input className="Elements" type="text" id="Nombre" onChange={(event)=>{setNombre(event.target.value);}}></input>
                </div>
                <div className='group-labels'>
                    <label>Categoria</label>
                    <select className ="option" name="Tipo" >
                      {userElements}
                    </select>
                </div>

                <div className='group-labels'>  
                    <label>Precio $</label>
                    <input className="Elements" type="text" id="Precio" onChange={(event)=>{setPrecio(event.target.value);}}></input>
                </div>

                <div className='group-labels'>
                    <label>Cantidad</label>
                    <input className="Elements" type="text" id="Cantidad" onChange={(event)=>{setCant(event.target.value);}}></input>
                </div>

                <div className='group-labels'>
                    <label>No. piezas</label>
                    <input className="Elements" type="text" id="Inventario" onChange={(event)=>{setInvent(event.target.value);}}></input>
                </div>
                
                <div className='group-labels'>
                    <label>Acerca de:</label>
                    <textarea name="postContent" rows={4} cols={40} onChange={(event)=>{setDesc(event.target.value);}} />
                </div>
               
            </div>
            <div className='buttons-down'>
                <div className='botones'>
                    <button type="submit" onClick={clear}>Cancelar</button>
                    <button type="submit" onClick={add}>Guardar</button>
                </div>
            </div>
            
            
        </div>

        
    );
}

export default AddProd;