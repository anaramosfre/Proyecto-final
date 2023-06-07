import { useContext, useState } from "react"
import "./Carrito.css"
import { Box, Typography, Button, Grid } from "@mui/material"
import { CarritoContext } from "../../Context/CarritoContext"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Carrito() {

    const {carrito, aumentarCantidad, disminuirCantidad, sumaCarrito, eliminarProducto } = useContext(CarritoContext); 

    const handleAumentarCantidad = (id) => {
        aumentarCantidad(id); 
    }

    const handleDisminuirCantidad = (id) => {
        disminuirCantidad(id); 
    };

    return (

        <>  
            <Box className="pedido">
                <Typography variant="h5">Mis Productos</Typography> <hr /> <br />
                <div>
                    {carrito.map((element) =>
                        <div className="carrito">
                            <Typography variant="h7" className="titulo-carrito"> {element.titulo} </Typography>
                            <img width="80px" src={element.imagen} />
                            <Typography variant="h6">$  {element.cantidad * element.precio} </Typography>
                             
                            <div className="carrito-detalle">
                              
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDisminuirCantidad(element.id)  }

                                >-</Button>
                                <p> {element.cantidad} </p>
                                <Button
                                    variant="contained"
                                    color="info"
                                    onClick={() => handleAumentarCantidad(element.id) }
                                >+</Button>
                            </div>
                            <IconButton 
                                aria-label="delete" 
                                size="large"
                                onClick={() => eliminarProducto(element.id)}
                                >
                                <DeleteIcon
                                fontSize="inherit"
                                />
                                </IconButton>
                        </div>
                    )}
                </div><br />
                <Typography variant="h6"> Total $ {sumaCarrito} </Typography> <br />
                <Button
                    variant="contained"
                    color="success"
                >Ir a Pagar</Button>

            </Box>

          
           

        </>
    )
}