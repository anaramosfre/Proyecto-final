import "./Footer.css"
import { Typography, IconButton } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function Footer() {
    return (
        <footer>
            <IconButton
                color="inherit"
                className="Icons"
                size="large">
                <InstagramIcon />
            </IconButton>

            <IconButton
                color="inherit"
                size="large">
                <FacebookIcon />
            </IconButton>


         

            <Typography>
                Todos los derechos reservados
            </Typography>


        </footer>
    )
}
