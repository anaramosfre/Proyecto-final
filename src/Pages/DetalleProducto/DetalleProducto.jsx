import { Card, Box, CardContent, Typography, CardMedia, Button, Grid} from "@mui/material";
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



    const handleclickAdd = ({id, precio, imagen, titulo}) => {
        addLibro({id, precio, imagen, titulo}); 
    
    }




    return (
        <>      
                <Grid container >
                <Card  className="cardDetalle" sx={{ display: "flex", mt:15 }} >
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

                            <Button sx={{m:1}}
                            onClick={() => handleclickAdd(libro)}
                            variant="outlined"
                    
                            >Comprar</Button>
                            <Button
                            onClick={() => addFavorites(libro)}
                            variant="outlined"
                            
                            >Agregar a favoritos</Button>
                        </CardContent>
                    </Box>
                    
                </Card> 

                </Grid>
            
        </>
    )}

