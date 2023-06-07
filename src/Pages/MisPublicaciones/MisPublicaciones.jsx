import { Link } from "react-router-dom";
import { Context } from "../../Context/Context"
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react"
import { Button, Typography, Card, Box, CardMedia, CardContent, Container, Grid } from "@mui/material";


export default function MisPublicaciones() {

    const { libros, deleteProduct } = useContext(Context);
    const { user } = useContext(UserContext)

    return (
        <>
            <div>
            <Typography variant="h5" textAlign="center" marginTop="50px">Mis Publicaciones</Typography>
                {libros.filter((libro) => libro.user === user.email)
                    .map((libro) => (
                        <Grid  
                        container
                        key={libro.id}
                        justifyContent="center">
                            <Card sx={{ display: "flex", m: 3, width: '70ch' }} >
                                <Box sx={{ display: "flex", flexDirection: "row"}}>
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

                                        <Button
                                        sx={{mt: 2, mr: 2}}
                                        onClick={() => deleteProduct(libro.id)}
                                        variant="contained"
                                        
                                        >Eliminar</Button>
                                        <Button
                                        sx={{mt: 2, mr: 2}}
                                        component={Link}
                                        to={`/updateProduct/${libro.id}`}
                                        variant="contained"
                                        >Editar</Button>
                                        <Button
                                        sx={{mt: 2, mr: 2}}
                                        component={Link}
                                        to={"/"}
                                        variant="contained"
                                        >Ver Publicación</Button>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
            </div>
        </>
    )}