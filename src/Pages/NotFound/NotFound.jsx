import { Link } from "react-router-dom"
import "./NotFound.css"
import { Typography } from "@mui/material"


export default function NotFound () {
    return (
        <>
        <div className="error">
        <Typography variant="h1">Oops..
        <Typography variant="h2">404 Not Found</Typography>
        </Typography>
        <img className="gato" src="https://media.istockphoto.com/id/1085061206/es/vector/gato-gris-y-una-rosa-port%C3%A1til-con-una-pantalla-de-la-muerte.jpg?s=612x612&w=0&k=20&c=w4Fs8sxZBTBVmoG69c72tDmHXXXQ2uzKXUrxuYgoLsc=" alt="" />
        <Link to="/">Volver al inicio</Link>
        </div>
        </>
    )
}