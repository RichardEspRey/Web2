
import './App.css';
import React from 'react';
import Formlogin from './Login/form_login';/* Componente de Login */
import Formregister from './Login/form_register';/* Componente de Registro */
import Catalogo from './Vendedor/catalogo';/* Componente para buscar en el catalogo */
import AddProd from './Vendedor/addProd';/* Componente de añadir producto */
import EditProduct from './Vendedor/editProduct';/* Componente de añadir producto */
import Inventario from './Vendedor/inventario';/* Componente de añadir producto */
import Ejemplo from './Vendedor/ejemplo';
import Nav from './Vendedor/nav';/* Componente de NavBar */
import NavComprador from './Comprador/nav';
import CardsVentas from './Comprador/cards'; /* Componente de Cards para las ventas */
import Detalle from './Comprador/detalle'; /* Componente de Cards para las ventas */
import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        {/* Rutas del vendedor */}

        <Route path="/inicio"element={
            <>
              <Nav />
              <Ejemplo />
            </>
          }
        />
        <Route path="/catalogo"element={
            <>
              <Nav />
              <Catalogo />

            </>
          }
        />
        <Route path="/addProd"element={
            <>
              <Nav />
              <AddProd/>

            </>
          }
        />
        <Route path="/editProd/:id"element={
            <>
              <Nav />
              <EditProduct/>

            </>
          }
        />
        <Route path="/inventario"element={
            <>
              <Nav />
              <Inventario/>

            </>
          }
        />
        <Route path="/InicioComprador"element={
            <>
              <NavComprador />
              <CardsVentas/>

            </>
          }
        />

        <Route path="/DetalleCompra/:id"element={
            <>
              <NavComprador />
              <Detalle/>

            </>
          }
        />
        {/* Rutas sin Navbar */}
        <Route path="/register" element={<Formregister />} />
        <Route path="/login" element={<Formlogin />} />
      </Routes>
    
    </BrowserRouter>
      

  );
}

export default App;
