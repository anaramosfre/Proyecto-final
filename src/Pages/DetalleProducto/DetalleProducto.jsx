import { Card, Box, CardContent, Typography, CardMedia, Button} from "@mui/material";
import { useContext } from "react";
import {FavoritesContext} from"../../Context/FavoritesContex"
import {CarritoContext} from "../../Context/CarritoContext"
import {Context} from "../../Context/Context"
import { useParams, useNavigate } from "react-router-dom";
import "./DetalleProducto.css"




export default function DetalleProducto() {

    const params = useParams();
    const {libros} = useContext(Context);
    const {addLibro} = useContext(CarritoContext);
    const {addFavorites} = useContext(FavoritesContext)

    const getLibroById = (id) => libros.find((libro) => libro.id === id);

    const libro = getLibroById(params.id);

    const navigate = useNavigate();

    const handleclickAdd = ({id, precio, imagen, titulo}) => {
        addLibro({id, precio, imagen, titulo}); 
        navigate("/carrito");
    }

  


    return (
        <>      
        
                <Card className="cardDetalle" sx={{ display: "flex"}} >
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 200 }}
                            src={libro.imagen}
                            alt=""
                        />
                        <CardContent
                        >
                            <Typography component="div" variant="h6">
                                {libro.titulo}
                            </Typography>
                            <Typography>
                                Autor: {libro.autor}
                            </Typography>
                            <Typography>
                                Editorial: {libro.editorial}
                            </Typography>
                            <Typography>
                                Categoria:  {libro.categorias}
                            </Typography>
                            <Typography>
                                Encuadernación: {libro.encuadernacion}
                            </Typography>
                            <Typography>
                                Estado: {libro.estado}
                            </Typography>
                            <Typography>
                                Reseña: {libro.reseña}
                            </Typography> 
                            <Typography variant="h6">
                                $ {libro.precio}
                            </Typography> 
                            
                            <br />

                            <Button
                            onClick={() => handleclickAdd(libro)}
                            >Comprar</Button>
                            <Button
                            onClick={() => addFavorites(libro)}
                            
                            >Agregar a favoritos</Button>
                        </CardContent>
                    </Box>
                    
                </Card> 
                        
    
            
        </>
    )}

