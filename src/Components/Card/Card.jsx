import "./Card.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../../Context/Context";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoritesContext } from "../../Context/FavoritesContex";
import { CarritoContext } from "../../Context/CarritoContext";
import { FormatAlignJustify } from "@mui/icons-material";


const CardProduct = ({ libro }) => {
    const { addFavorites, favorites } = useContext(FavoritesContext);
    const { addLibro } = useContext(CarritoContext);



    const handleclickAdd = ({ id, precio, imagen, titulo }) => {
        addLibro({ id, precio, imagen, titulo });

    }

    return (
        <>

            <Card

                key={libro.id} sx={{
                    width: 230,
                    margin: 3,
                    transition: "0.25",
                    "&:hover": {
                        transform: "scale(1.05)",
                    },

                }}>

                <Box
                    component={Link}
                    to={`/libro/${libro.id}`}
                    style={{ textDecoration: 'none' }
                    }>
                    <CardMedia
                        component="img"
                        alt="imagen portada"
                        height="330"
                        src={libro.imagen}

                    />
                    <CardContent>
                        <Typography gutterBottom  >
                            {libro.titulo}

                        </Typography>
                        <Typography gutterBottom variant="h6">
                            ${libro.precio}

                        </Typography>
                        <Typography variant="body3" color="text.secondary">
                            Autor: {libro.autor}
                        </Typography>
                        <Typography variant="body3" color="text.secondary">
                            Categoria: {libro.categorias}
                        </Typography>
                        <Typography variant="body3" color="text.secondary">
                            Estado: {libro.estado}
                        </Typography>

                    </CardContent>
                </Box>

                <CardActions>
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() => handleclickAdd(libro)}
                    >
                    Comprar</Button>
                <IconButton
                    aria-label="delete"
                    onClick={() => addFavorites(libro)}
                    disabled={favorites.some((item) => item.id === libro.id)}
                    color="warning"
                >
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card >



        </>
    )
}

export default CardProduct;