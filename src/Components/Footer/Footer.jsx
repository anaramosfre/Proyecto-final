import "./Footer.css"
import { Typography, IconButton } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from "../../assets/logofinal.png"


export default function Footer() {
    return (
        <footer>
            <img className="logo-footer" src={logo} alt="" />
            <div>
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
            </div>
            <Typography>
                Todos los derechos reservados
            </Typography>
        </footer>
    )
}
