import { useContext, useState } from "react"
import "./Carrito.css"
import { Box, Typography, Button } from "@mui/material"
import { CarritoContext } from "../../Context/CarritoContext"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Carrito() {

    const {carrito, aumentarCantidad, disminuirCantidad, sumaCarrito } = useContext(CarritoContext); 

    const handleAumentarCantidad = (id) => {
        aumentarCantidad(id); 
    }

    const handleDisminuirCantidad = (id) => {
        disminuirCantidad(id); 
    };

    return (

        <>
            <Box className="pedido">
                <Typography variant="h5">Detalles del pedido</Typography> <hr /> <br />
                <div>
                    {carrito.map((element) =>
                        <div className="carrito">
                            <img width="70px" src={element.imagen} />
                            <p className="titulo-carrito"> {element.titulo} </p>
                            <div className="carrito-detalle">
                                <span>$  {element.cantidad * element.precio} </span>
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
                                <IconButton aria-label="delete" size="large">
                                <DeleteIcon
                                fontSize="inherit"
                                />
                                </IconButton>
                            </div>
                        </div>
                    )}
                </div><br />
                <span> Total $ {sumaCarrito} </span> <br />
                <Button
                    variant="contained"
                    color="success"
                >Ir a Pagar</Button>

            </Box>

        </>
    )
}