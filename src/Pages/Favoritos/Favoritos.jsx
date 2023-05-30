import { FavoritesContext } from "../../Context/FavoritesContex"
import { useContext} from "react"
import { Box, Card, Grid, Typography, CardMedia, CardContent, CardActions } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { Context } from "../../Context/Context";


const Favorites = () => {

    const {favorites, deleteFavorites} = useContext(FavoritesContext)


    return (
        <>
            <Grid>
                <Typography variant="h5">Favoritos</Typography>
                {favorites.map((item) => (
                    <Card 
                    key={item.id}
                    sx={{
                        width: 220,
                    }}>
                        <CardMedia
                        component="img"
                        alt="imagen portada"
                        height="300"
                        src={item.imagen}
                    />
                        <CardContent>
                        <Typography variant="h6" gutterBottom  >
                            {item.titulo}
                        </Typography>
                        <Typography gutterBottom  >
                            {item.autor}
                        </Typography>
                        <Typography >
                           $ {item.precio}
                        </Typography>

                        </CardContent>
                        <CardActions>
                        <IconButton aria-label="delete" size="large">
                            <AddShoppingCartIcon
                            fontSize="inherit"
                            onClick={() => handleclickAdd(item.id)}
                            />
                        </IconButton>
                        <IconButton aria-label="delete" size="large">
                            <DeleteIcon 
                            fontSize="inherit"
                            onClick={() => deleteFavorites(item.id)}
                            />
                        </IconButton>

                        </CardActions>
                    
                    </Card>
                ))}
                {favorites.length === 0 && <p>No existen favoritos</p>}        
            </Grid>
        </>
    );
};
export default Favorites;