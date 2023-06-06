import { FavoritesContext } from "../../Context/FavoritesContex"
import { useContext} from "react"
import { Box, Card, Grid, Typography, CardMedia, CardContent, CardActions } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

import IconButton from '@mui/material/IconButton';


const Favorites = () => {

    const {favorites, deleteFavorites} = useContext(FavoritesContext)



    return (
        <>  
            <Typography marginTop="50px" textAlign="center" variant="h5">Favoritos</Typography>
            <Grid 
            container
            justifyContent="center"
            gap={4}
            marginTop="50px"
            >
                {favorites.map((item) => (
                    <Card 
                    key={item.id}
                    sx={{
                        width: 200,
                    }}>
                        <CardMedia
                        component="img"
                        alt="imagen portada"
                        height="280"
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
                        <IconButton aria-label="delete" size="large">
                            <DeleteIcon 
                            fontSize="inherit"
                            onClick={() => deleteFavorites(item.id)}
                            />
                        </IconButton>
                    </Card>
                ))}
                {favorites.length === 0 && <p>No existen favoritos</p>}        
            </Grid>
        </>
    );
};
export default Favorites;