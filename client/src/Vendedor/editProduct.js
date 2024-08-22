import React, { useEffect, useState } from 'react';
import "./css/addProd.css";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useParams } from 'react-router-dom';

const EditProduct = () => {
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

    const add = () => {
        Axios.post("http://localhost:3001/api/users/updateProducts", {
            id_product: id,
            categoria: categoria,
            id: sessionId,
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            desc: desc,
            invent: invent
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

    const clear = () => {
        window.location.reload();
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='producto'>
            <div className='contenedor-producto'>
                <h2>Editar producto</h2>
                {selectedImage && (
                    <img src={selectedImage} alt="Selected" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                )}
                <div className='group-labels'>
                    <label htmlFor="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={handleImageChange} />
                </div>

                <div className='group-labels'>
                    <label>Titulo del producto</label>
                    <input className="Elements" type="text" id="Nombre" onChange={(event) => { setNombre(event.target.value); }} value={nombre}></input>
                </div>
                <div className='group-labels'>
                    <label>Categoria</label>
                    <select className="option" name="Tipo" onChange={(event) => { setCategoria(event.target.value); }} value={categoria}>
                        <option value="Electronica">Electronica</option>
                        <option value="Ferreteria">Ferreteria</option>
                    </select>
                </div>

                <div className='group-labels'>
                    <label>Precio $</label>
                    <input className="Elements" type="text" id="Precio" onChange={(event) => { setPrecio(event.target.value); }} value={precio}></input>
                </div>

                <div className='group-labels'>
                    <label>Cantidad</label>
                    <input className="Elements" type="text" id="Cantidad" onChange={(event) => { setCant(event.target.value); }} value={cantidad}></input>
                </div>

                <div className='group-labels'>
                    <label>No. piezas</label>
                    <input className="Elements" type="text" id="Invent" onChange={(event) => { setInvent(event.target.value); }} value={invent}></input>
                </div>

                <div className='group-labels'>
                    <label>Acerca de:</label>
                    <textarea name="postContent" rows={4} cols={40} onChange={(event) => { setDesc(event.target.value); }} value={desc} />
                </div>
            </div>
            <div className='buttons-down'>
                <div className='botones'>
                    <button type="button" onClick={clear}>Cancelar</button>
                    <button type="button" onClick={add}>Guardar</button>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;
