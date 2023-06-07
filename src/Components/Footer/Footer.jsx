import "./Footer.css"
import { Typography, IconButton } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


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
            <IconButton
                color="inherit"
                size="large">
                <WhatsAppIcon/>
            </IconButton>

            <Typography>
                Todos los derechos reservados
            </Typography>
        </footer>
    )
}
