const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const userVendedor = require("../controllers/vendedorControllers");
const userComprador = require("../controllers/compradorControllers");

//rutas del usuario
router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.post("/get", userController.getUser);

//rutas del flujo del vendedor
router.post("/registerProduct", userVendedor.createProduct);
router.post("/getProducto", userVendedor.getProducts);
router.post("/getOneProduct", userVendedor.getOneProduct);
router.post("/updateProducts", userVendedor.updateProducts);
router.post("/getCategories",userVendedor.getCategories);

//rutas del flujo del comprador
router.post("/getAllProducts", userComprador.getAllProducts);
router.post("/comprarProduct",userComprador.comprarProduct)
module.exports = router;