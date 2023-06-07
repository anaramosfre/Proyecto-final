import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";

import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import DetalleProducto from "./Pages/DetalleProducto/DetalleProducto";
import NotFound from "./Pages/NotFound/NotFound";
import IniciarSesion from "./Pages/IniciarSesion/IniciarSesion";
import Registro from "./Pages/Registro/Registro";
import Carrito from "./Pages/Carrito/Carrito";
import Favoritos from "./Pages/Favoritos/Favoritos"
import  Dashboard  from "./Pages/Dashboard/Dashboard";
import CrearPublicacion from "./Pages/CrearPublicacion/CrearPublicacion";
import MisPublicaciones from "./Pages/MisPublicaciones/MisPublicaciones";
import UpdateProduct from "./Pages/UpdateProduct"
import DonarProduct  from './Pages/Donar/DonarProduct'



const App = () => { 
  const {user} = useContext(UserContext);

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/libro/:id" element={<DetalleProducto />} />
        <Route path="/Carrito" element={<Carrito/>} />
        <Route path="*" element= { <NotFound/> } />
        <Route path="/IniciarSesion" element={!user ? <IniciarSesion/> : <Navigate to="/Dashboard"/>} />
        <Route path="/Dashboard" element= {user ? <Dashboard/>  : <Navigate to="/IniciarSesion"/> } />
        <Route path="/Registro" element={!user ? <Registro/> : <Navigate to="/Dashboard"/> } />
        <Route path="/CrearPublicacion" element={user ? <CrearPublicacion/> : <Navigate to="/IniciarSesion"/> } />
        <Route path="/MisPublicaciones" element={user ? <MisPublicaciones/> : <Navigate to="/IniciarSesion"/> } />
        <Route path="/UpdateProduct/:id" element={user ? <UpdateProduct/> : <Navigate to="/IniciarSesion"/> } />  
        <Route path="/Favoritos" element= { user ? <Favoritos/> : <Navigate to="/IniciarSesion"/> } />
        <Route path="/DonarProduct" element= { user ? <DonarProduct/> : <Navigate to="/IniciarSesion"/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  )}

export default App
