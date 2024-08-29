const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "web2"
});
const createProduct = (req,resp)=>{
    const op = "I"; // Operación a realizar (I para inserción)
    const id = null; 
    const categoria_id = req.body.categoria;
    const id_user = req.body.id;
    const img =req.body.image;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;
    const descripcion = req.body.desc;
    const inventario = req.body.invent;
    console.log()
    db.query('CALL pProductos(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [op, id,categoria_id,id_user,img, nombre, precio, cantidad, descripcion, inventario], (err, result) =>{
        if (err) {
            return res.status(500).send(err);
        }
        if(result[0][0].resp === 1){
            resp.send({message:"Empleado registrado con éxito",id:1});// Envio de respuesta del servidor a mi componente
        }else{

            resp.send({message:"Error en el registro, correo ya registrado",id:0});

        }
    });
}; 

const getProducts = (req,resp)=>{
    const op = "all"; // Operación a realizar (I para inserción)
    const id = null; 
    const categoria_id = null;
    const id_user = req.body.id;
    const img =null;
    const nombre = null;
    const precio = null;
    const cantidad = null;
    const descripcion = null;
    const inventario = null;
    db.query('CALL pProductos(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [op, id,categoria_id,id_user,img, nombre, precio, cantidad, descripcion, inventario], (err, result) =>{
        if (err) {
            return res.status(500).send(err);
        }
        const products = result[0]; // Los resultados suelen estar en la primera posición del array devuelto
        // Envío de los resultados al cliente
        resp.send({ message: "Productos obtenidos con éxito", data: products });
       
    });
}; 

const getOneProduct = (req,resp)=>{
    const op = "s"; // Operación a realizar (I para inserción)
    const id = req.body.id; 
    const categoria_id = null;
    const id_user = null;
    const img =null;
    const nombre = null;
    const precio = null;
    const cantidad = null;
    const descripcion = null;
    const inventario = null;
    console.log("funcion de obtener un producto id: "+id)
    db.query('CALL pProductos(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [op, id,categoria_id,id_user,img, nombre, precio, cantidad, descripcion, inventario], (err, result) =>{
        if (err) {
            return res.status(500).send(err);
        }
        const products = result[0]; // Los resultados suelen estar en la primera posición del array devuelto
        // Envío de los resultados al cliente
        console.log(products);
        resp.send({ message: "Producto obtenido con éxito", data: products });
       
    });
}; 

const updateProducts = (req,resp)=>{
    const op = "U"; // Operación a realizar (I para inserción)
    const id = req.body.id_product; 
    const categoria_id = req.body.categoria;

    const id_user = req.body.id;
    const img = null;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;
    const descripcion = req.body.desc;
    const inventario = req.body.invent;
    db.query('CALL pProductos(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [op, id,categoria_id,id_user,img, nombre, precio, cantidad, descripcion, inventario], (err, result) =>{
        if (err) {
            return res.status(500).send(err);
        }
        const products = result[0]; // Los resultados suelen estar en la primera posición del array devuelto
        // Envío de los resultados al cliente
        resp.send({ message: "success"});
       
    });
}; 

const getCategories = (req,resp)=>{
    const op = "All"; // Operación a realizar (I para inserción)


    db.query('CALL pCategorias(?, ?, ?, ?)', [op, null, null, null], (err, result) =>{
        if (err) {
            return res.status(500).send(err);
        }
        const Categories = result[0]; // Los resultados suelen estar en la primera posición del array devuelto
        // Envío de los resultados al cliente
        resp.send({ message: "Categorias obtenidas con exito", data: Categories });
       
    });
}; 


module.exports = {
    createProduct,
    getProducts,
    updateProducts,
    getOneProduct,
    getCategories
 
};