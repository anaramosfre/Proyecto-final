import { useContext, useState } from "react"
import { UserContext } from "../../Context/UserContext"
import { Context } from "../../Context/Context"
import { Box, TextField, MenuItem, Button, Typography, Container } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import "./CrearPublicacion.css"
import { useNavigate } from "react-router-dom";



const CrearPublicacion = () => {

    const { user } = useContext(UserContext)
    const { createProduct } = useContext(Context)
    const navigate = useNavigate()

    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [editorial, setEditorial] = useState("")
    const [categorias, setCategorias] = useState("")
    const [encuadernacion, setEncuadernacion] = useState("")
    const [precio, setPrecio] = useState("")
    const [estado, setEstado] = useState("")
    const [imagen, setImagen] = useState("")
    const [reseña, setReseña] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            titulo,
            autor,
            editorial,
            categorias,
            encuadernacion,
            precio,
            estado,
            imagen,
            reseña,
            id: Date.now().toString(),
            user: user.email
        }
        createProduct(newProduct);
        navigate("/MisPublicaciones")
    

    };
    const tapas = [
        {
            value: 'Tapa Blanda',
            label: 'Tapa Blanda',
        },
        {
            value: 'Tapa Dura',
            label: 'Tapa Dura',
        }
    ];

    const Estados = [
        {
            value: 'Nuevo',
            label: 'Nuevo',
        },
        {
            value: 'Usado',
            label: 'Usado',
        }
    ];

    return (
        <>
            <Container
                maxWidth="lg"
            >
                <Box
                    sx={{
                        '& > :not(style)': { m: 3, width: '30ch' },
                    }}
                    component="form"
                    onSubmit={handleSubmit} >
                    <Typography
                        variant="h5"
                    >Ingresa los datos de tu publicación</Typography>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Titulo"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Autor"
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Editorial"
                        value={editorial}
                        onChange={e => setEditorial(e.target.value)}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Categoria"
                        value={categorias}
                        onChange={e => setCategorias(e.target.value)}
                    />
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Encuadernación"
                        defaultValue="Tapa Blanda"
                        value={encuadernacion}
                        onChange={e => setEncuadernacion(e.target.value)}
                    >
                        {tapas.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        id="outlined-multiline-flexible"
                        label="Precio"
                        value={precio}
                        onChange={e => setPrecio(e.target.value)}
                    />
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Estado"
                        defaultValue=""
                        value={estado}
                        onChange={e => setEstado(e.target.value)}
                    >
                        {Estados.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        fullWidth label="URL Imagen"
                        id="fullWidth"
                        value={imagen}
                        onChange={e => setImagen(e.target.value)}
                    />

                    <TextField
                        id="outlined-multiline-static"
                        label="Raseña"
                        multiline
                        rows={4}
                        value={reseña}
                        onChange={e => setReseña(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        endIcon={<SendIcon />}
                    >Publicar</Button>

                </Box>
            </Container>
        </>
    )
}

export default CrearPublicacion;